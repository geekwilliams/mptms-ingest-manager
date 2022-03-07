import * as mountutils  from 'linux-mountutils';
import * as blockutils from 'linux-blockutils';
import * as fs from 'fs';

// re-write 3/6/2022 to fix spaghetti mess CW
// DSS base servers have bootloader flash from Dolby Cinema system.  Exception for these devices has been hardcoded
//
// regex for new drive detection filters out loop and sd* devices.  May need to change this if issues arise with this implementation

// This is imported from OLD TMS_SERVER code
// need to refactor for ES6 and check for runtime(async) issues

const log = "/var/log/mptms-ingest-manager.log";

export class automount { 
    constructor(devBlacklist){
        this.blacklist = devBlacklist;
        this.automountServiceTask = false;
        this.mountList = [];
    }

    // set env or get root and content partitions manually
    async init(){
        // make sure log file exists
        if(!fs.existsSync(log)){
            let date = new Date() 
            fs.writeFileSync(log, "[ " + date + " ]    -------- BEGIN LOG FILE --------"  );
        }

        if(!this.blacklist){ 
            await logWrite("No dev blacklist specified. Using discovery for root and content partitions", log)
            console.log("No blacklist configured.  Using discovery for root and content partitions...")
            try{
                // get root 
                let root = await this.getRoot();
                await logWrite("Found root at " + root, log); 
                let blacklist = [];
                blacklist.push({ type: 'root', path: root });
                //(this.blacklist).push({ type: 'root', path: root });

                // get content
                let content = await this.getContentPartition();
                await logWrite("Found content partition at " + content, log);
                blacklist.push({ type: 'content', path: content });
                this.blacklist = blacklist;
                

            }
            catch(err){ 
                console.error("Unable to determine root or content partition.  See log for details."); 
                await logWrite("Unable to determine one or more system drives. Please see error for more information.", log)
                await logWrite(err, log)
                
                throw err
            }
        }
        else{ 
            console.log("Using configured blacklist.");
            logWrite("Using configured blacklist.", log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
        }
    }

    async start(){
        if (process.platform == 'linux'){
            let processRunning = false;
            let mountList = [];
            console.log('Running on linux');
            try{
                await this.init();
                this.automount = true;

                this.workerTimer = setInterval(async () => {
                    // need to keep tasks from overlapping 
                    if(true){ 
                        processRunning = true;
                        mountList = await automountService(this.blacklist, this.mountList);
                        this.mountList = mountList;

                        console.log(this.mountList);
                        processRunning = false
                    }
                    else{ 
                        console.log("Operation in progress...");
                    }
                   

                }, 5000);
    
            }
            catch(err){ 
                console.log("There was an error starting automount service.");
                console.error(err);
                logWrite("Error starting automount service", log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
            }

            
        }
        else if (process.platform == 'win32'){ 
            console.log('Running on Windows');
            this.automount = false;
            
            console.log("This application will not run on windows.");
            logWrite("Application is not compatible with windows.  Terminating...", log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
        }
        else {  
            console.error("Cannot determine platform.  This application will not run.");
        }
            
    }

    stop(){
        // stop removableDriveCheck() if running
        if (this.workerTimer){
            clearInterval(this.workerTimer);
            this.workerTimer = null;
        }
    }

    getRoot(){
        return new Promise((resolve, reject) => {
            let rootMount = [];
            if(!fs.existsSync("/etc/fstab")){ 
                console.log({"mounted": false, "error": "Can't read fstab"})
                reject()
            }
            else{ 
                let fstab = fs.readFileSync("/etc/fstab", { 'encoding': 'ascii' }).split("\n");
                let mounts = []
                for(let m in fstab){ 
                    if (fstab[m].includes('#')){ 
                        //do nothing
                    }
                    else{ 
                        mounts.push(fstab[m])
                    }
                }
                // find root
                for(let l in mounts){ 
                    let charArray = mounts[l].split(' ');
                    let found = false;
                    for(let Element in charArray) { 
                        //console.log(charArray[Element]);
                        if(charArray[Element].includes('/') && (charArray[Element].length) == 1){ 
                            // found root
                            found = true;
                            let devPath;
                            if(charArray[0].includes("UUID=")){ 
                                let uuid = (charArray[0].split('=', 2))[1];
                                devPath = "/dev/disk/by-uuid/" + uuid;
                                // get link
                                fs.readlink(devPath, (err, linkString) => { 
                                    let s = linkString.split('/');
                                    rootMount = "/dev/" + s[2];
                                    resolve(rootMount.slice(0,-1));
                                });

                            }
                            else {
                                fs.readlink(charArray[0], (err, linkString) => { 
                                    let s = linkString.split('/');
                                    rootMount = "/dev/" + s[2];
                                    resolve(rootMount.slice(0,-1));
                                });
                            }
                        
                        }
                        if(found) { 
                            break;
                        }
                    }
                    if(found) {
                        break;
                    }
                }
            }
        });
    }

    getContentPartition(){ 
        return new Promise((resolve, reject) => { 
            let contentMount = [];
            if(!fs.existsSync("/etc/fstab")){ 
                console.log({"mounted": false, "error": "Can't read fstab"})
                reject()
            }
            else{ 
                let fstab = fs.readFileSync("/etc/fstab", { 'encoding': 'ascii' }).split("\n");
                let mounts = []
                for(let m in fstab){ 
                    if (fstab[m].includes('#')){ 
                        //do nothing
                    }
                    else{ 
                        mounts.push(fstab[m])
                    }
                }
                // find root
                for(let l in mounts){ 
                    let charArray = mounts[l].split(' ');
                    let found = false;
                    for(let Element in charArray) { 
                        //console.log(charArray[Element]);
                        if((charArray[Element].includes('/tmsserver') && (charArray[Element].length) == 10) || (charArray[Element].includes('/tmsserver/') && (charArray[Element].length) == 11)){ 
                            // found content
                            found = true;
                            // deal with "UUID="
                            let devPath;
                            if(charArray[0].includes("UUID=")){ 
                                let uuid = (charArray[0].split('=', 2))[1];
                                devPath = "/dev/disk/by-uuid/" + uuid;
                                // get link
                                fs.readlink(devPath, (err, linkString) => { 
                                    let s = linkString.split('/');
                                    contentMount = "/dev/" + s[2];
                                    resolve(contentMount.slice(0,-1));
                                });

                            }
                            else {
                                fs.readlink(charArray[0], (err, linkString) => { 
                                    let s = linkString.split('/');
                                    contentMount = "/dev/" + s[2];
                                    resolve(contentMount.slice(0,-1));
                                });
                            }
                        
                        }
                        if(found) { 
                            break;
                        }
                    }
                    if(found) {
                        break;
                    }
                }
            }
        })
    }


}

function automountService(blacklist, mounted){
    return new Promise(async (resolve, reject) => {
        let mList = mounted | [];
        let blArr = blacklist;
        // get info from blacklist array
        let exString = '';
        blArr.forEach(e => {
            exString += (e.path).slice(-1);
        }); 

        // filters blacklist + loop and sr0 devices
        let ex = String.raw`(^((sd[" + ${exString} + "])|loop|sr0))`;
        try {
            let blDevs = await getBlockDevices(ex);
            for(d in blDevs){ 
                let parts = blDevs[d].PARTITIONS;
                let dev;
                if(!parts){ 
                    // no or single partition case
                    dev = blDevs[b].NAME;
                    let isMounted = mountutils.isMounted("/dev/" + dev, true);
                    if(!isMounted.mounted){ 
                        // mount if it is not mounted
                        let mountResult = mount("/dev/" + dev, "/media/" + dev, { "createDir": true, "readonly": true, "mountPath": mountPoint, "dirMode": '0444'});
                        if(mountResult.error){ 
                            logWrite("There was an error mounting disk: ", log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                            logWrite(mountResult.error, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                        }
                        else { 
                            logWrite("Device /dev/" + dev + " mounted at /media/" + dev, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                            // push device onto array after successfull mount
                            mList.push({ device: '/dev/' + dev, mountPoint: '/media/' + dev, uuid: '' });
                        }
                    }

                }
                else { 
                    // drill down into partitions
                    for(p in parts){ 
                        let isMounted = mountutils("/dev/" + parts[p].NAME, true);
                        if(!isMounted.mounted){ 
                            let mountResult = mount("/dev/" + parts[p].NAME, "/media/" + parts[p].NAME, { "createDir": true, "readonly": true, "mountPath": mountPoint, "dirMode": '0444'});
                            if(mountResult.error){ 
                                logWrite("There was an error mounting disk: ", log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                                logWrite(mountResult.error, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                            }
                            else { 
                                logWrite("Device /dev/" + dev + " mounted at /media/" + dev, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)}); 
                                mList.push({ device: '/dev/' + dev, mountPoint: '/media/' + dev, uuid: parts[p].UUID });
                            }    
                        }

                    }   
                }
            }
        }

        catch (err){
            logWrite("Error getting block devs... " + err, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
            console.error("Error getting block devs...   " + err);
        }

        // Now deal with unplugged devs
        try { 
            let diskByUUID = fs.readdirSync('/dev/disk/by-uuid/');
            let mediaMounts = fs.readdirSync('/media/');
            let blockDevs = await getBlockDevices(blArr); 

            for(i in mList) {
                let d = mList[i]; 
                if(!diskByUUID.includes(d.uuid)){ 
                    // worst case scenario first (dev has no uuid or no partition but is mounted somehow)
                    // find index of device in blockDevs
                    let devIndex;
                    for(dev in blockDevs){ 
                        if(blockDevs[dev].NAME == (d.device).slice(-3)){ 
                            // found it (no need to unmount)
                            devIndex = dev;
                        }
                    }

                    // if dev is not found then unmount and remove dir
                    if(!devIndex){ 
                        let umountResult = await unmount(d.mountPoint, true, { "removeDir": true });
                        if(umountResult.error){ 
                            logWrite("There was an error unmounting device at " + d.device, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                        }
                        else { 
                            logWrite("Successfully unmounted device at " + d.mountPoint, log).catch(err => { console.error("Unable to write to log.  Does it exist?"); console.error(err)});
                            // return list of mounts to main class when finished
                            resolve(mList.splice(i, 1))
                        }
                    }
                }
                else { 
                    // found uuid, no need to umount 
                }
            }
        }   
        catch (err){ 
            console.log("There was an error checking on mounts");
            console.log(err)
        }
    });
}

function getBlockDevices(exclusions){ 
    // Promisify stupid blockutils so we can make the server function nicer to look at
    return new Promise((resolve, reject) => {
        blockutils.getBlockInfo({ "ignoredev": exclusions }, (err, json) => {   
            if(err){ 
                reject(err);
            }
            else{ 
                resolve(json);
            }
        }); 
    });
}

function mount(device, mountPoint, mountOptions){ 
    // Promisify stupid mount function to make the server function nicer to look at
    return new Promise((resolve, reject) => {
        if(!mountOptions){ 
            mountOptions = { "createDir": true, "readonly": true, "mountPath": mountPoint, "dirMode": '0444'} 
        }

        mountutils.mount(device, mountPoint, mountOptions, (result) => {
            if(result.error){ 
                console.error(result.error);
                resolve(result);
            }
            else{
                resolve(result);
            }
        });
    });
}

function unmount(mountPoint, isDev, options){ 
    // Promisify unmount function to make server function nicer to look at
    return new Promise((resolve, reject) => { 
        if(!options){ 
            options = { "removeDir": true }
        }
        mountutils.umount(mountPoint, isDev, options, (result) => {
            if(result.error){
                console.error(result.error);
                resolve(result);
            }
            else { 
                resolve(result);
            }
        });
    });
}

function logWrite(message, path){
    return new Promise((resolve, reject) => {
        let d = Date();
        let dateString = "[ " + d + " ]    "; 
        let fsStream = fs.createWriteStream(path, { flags: 'a' });
        try{
            fsStream.write(message + "\n");
            fsStream.end();
            resolve();
        }
        catch (err) { 
            console.error("Error writing to log file");
            resolve();
        }
    });
}







