const fs = require('fs');
const blockutils = require('linux-blockutils');
const mountutils = require('linux-mountutils');

function automountService(blacklist){
    // blacklist is []
    return new Promise(async (resolve, reject) => {
        let blArr = blacklist;
        // get info from blacklist array
        let exString = '';
        blArr.forEach(e => {
            exString += (e.path).slice(-1);
        }); 

        let ex = String.raw`(^((sd[" + ${exString} + "])|sr0))`;
        try {
            let blDevs = await getBlockDevices(ex);
            console.dir(blDevs)
        }

        catch{

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

let bl = [
    { path: '/dev/sda'}
]

automountService(bl);

