import * as mountutils  from 'linux-mountutils';
import * as blockutils from 'linux-blockutils';
import { fs } from 'fs';
import { exec } from 'child_process';

// This is imported from OLD TMS_SERVER code
// need to refactor for ES6 and check for runtime(async) issues

export class automount { 
    constructor(){}

    start(){

        if (process.platform == 'linux'){
             console.log('Running on linux');
             this.automount = true;
    
             this.workerTimer = setInterval(() => {
    
                 this.removableDriveCheck();
    
              }, 1000);
    
        }
            
    }

    stop(){
        // stop removableDriveCheck() if running
        if (this.workerTimer){
            clearInterval(this.workerTimer);
            this.workerTimer = null;
        }
    }

    getSystemDrive(){
        if (process.platform == 'linux'){
            this.systemDrive = 'sda';
        }
        else if (process.platform == 'win32'){
            this.systemDrive = 'C:\\';
        }
    }

    removableDriveCheck(){

        if (this.automount){
            //  Check if we need to mount a drive
            autoMountDrive();

            // check of we nee to unmount drive
            autoumountdrive();
        }
    }

    getAttachedDrives(){
        return new Promise(function (resolve, reject) {

            try {

                if (this.isLinux){
                    let currentMounts = getlinuxmounted();
                    console.log(currentMounts);

                    resolve(currentMounts);
                }

                reject();
            }
            catch (e) {
                reject();
            }

        });



    }


}

function autoMountDrive() {

    // Get Current Drives that are connected but no the sba Drives
    getLinuxDrivePartitions().then((parList) =>
    {
        //console.log("parList:" + parList);

        // Go throught list and Check if it is already mounted.
        // If not Mount the drive to /media/sd(x)


        for (var parIndex in parList)
        {
            var parFullName = '/dev/' + parList[parIndex].name;
            var parMountPath ='/media/' + parList[parIndex].name;

            // Check if drive is Mounted all ready

            var checkresult = mountutils.isMounted(parFullName, true);

            if (checkresult.mounted == false)
            {

                mountutils.mount(parFullName,parMountPath, { "createDir": true }, function(result) {
                    if (result.error) {
                        // Something went wrong!
                        console.log(result.error);
                    } else {
                        // mount succeeded - do stuff here
                        console.log('mount succeeded: ' + parMountPath);
                    }
                });
            }
        }

    });


}

function getLinuxDrivePartitions()
{

    return new Promise((resolve, reject) =>
        {


            blockutils.getBlockInfo({"ignoredev":"^(sda)"}, function(err,json) {
            if (err) {
                console.log("ERROR:" + err);
                reject(err);
            } else {

                var list = [];

                for (var i in json) {

                    var driveObject = json[i];

                    if (driveObject.TYPE == 'disk')
                    {

                        for (var p in driveObject.PARTITIONS)
                        {
                            var driveParttion = driveObject.PARTITIONS[p];


                            var driveInfo  = { fullname: '/dev/' +  driveParttion.NAME , name:  driveParttion.NAME  };




                            list.push(driveInfo);
                        }
                    }
                }

                resolve(list);
                //console.log(JSON.stringify(json,null,"  "));
            }
        });


        });








}


async function autoumountdrive(){
    // current mounts and unmount if drive is not connected

    let currentMounts = await getlinuxmounted();
   // console.log('autounmountdrive');
    //console.log(currentMounts);


    for (var i in currentMounts)
    {
        var tmount = currentMounts[i];


        // Check if device is connected
        // If not Removie Device mount
         doesDeviceExist(tmount.device).then((deviceExist) => {


             //console.log(tmount.device + ': ' + deviceExist);

            if (deviceExist == false)
            {
                // Device doesn't exit so clean up mount by removing it.


                mountutils.umount(tmount.device, true, { "removeDir": true }, function(result) {
                    if (result.error) {
                        // Something went wrong!
                        console.log(result.error);
                    } else {
                        // mount succeeded - do stuff here
                        console.log('umount succeeded: ' + tmount.device);
                    }
                });


            }

        });
    }




}


async function getlinuxmounted(){

    // Need mtab to check existing mounts
    if (!fs.existsSync("/etc/mtab")) {
        return({"mounted": false, "error": "Can't read mtab"});
    }

    let mountInfo = [];
    let mtab;
    try{ 
        mtab = await fs.readFileSync("/etc/mtab", { 'encoding': 'ascii' }).split("\n");
    
    }
    catch(err){ 
        throw err;
    }
    // Interate through and find the one we're looking for
    for (i in mtab) {
        let mountDetail = mtab[i].split(" ");

        let oneMount = {};
        oneMount.device = mountDetail[0];
        oneMount.mountpoint = mountDetail[1];
        oneMount.fstype = mountDetail[2];
        oneMount.fsopts = mountDetail[3];

        if (oneMount.device.includes("/dev/sd") && !oneMount.device.includes("/dev/sda") )
        {
            mountInfo.push(oneMount);
    
        }

    }

    return mountInfo;
}

function doesDeviceExist(devicename) {
    return new Promise((resolve, reject) =>
        {


            getlinuxdrivePartitoins().then((parList) =>
            {
                //console.log(parList);

                for (var i in parList)
                {
                    var driveObject = parList[i];

                    if (driveObject.fullname == devicename) {
                        resolve(true);
                    }
                }

                resolve(false);
             });
        });

}

