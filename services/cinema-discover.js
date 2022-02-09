// query cinema server network for s/n @ content
import dotenv from 'dotenv';
import { doremi } from '../lib/ims/doremi.js';
import { smi } from '../lib/dss/dolbySMI.js';
import { smi_operation } from '../lib/dss/dolbySMIDefinitions.js';
// pull in config info

const result = dotenv.config();
if (result.error){ 
    console.log("Config file malformatted.  Please fix and restart service.");
    throw result.error;
}


let serverSerials = [];

async function getServerSerial() {
    const env = process.env
    const theaterCount = env.AUDITORIUM_COUNT;
    const controlNetwork = env.CONTROL_NETWORK;
    const mediaNetwork = env.MEDIA_NETWORK;
    let serverTypeArr = [];
    // array index should match with theater number (shifted by one for zero index)
    let serverArray = [];

    for(const [key, value] of Object.entries(env)){ 
        let k = `${key}`;
        let val = `${value}`;
        if(k.toLowerCase().includes('theater')){ 
            serverTypeArr.push([k,val]);
        }
    }
    
    serverTypeArr.forEach(async element => {
        let audNum = parseInt(element[0].substring(8, 10));
        if(isNaN(audNum) || audNum === 0){ 
            let err = "Theater info for " + element[0] + " is malformatted.  Please correct config file. (Zero auditorium number is not allowed)";
            throw err;
        }
        switch (element[1]) {
            case "IMS":
                // query ims for serial
                let prelim = controlNetwork.split('.', 3);
                let oct = audNum + 110;
                let address = prelim[0] + '.' + prelim[1] + '.' + prelim[2] + '.' + oct;
                let server = new doremi(address);
                // must login first
                try {
                    let session = await server.Login({ username: "manager", password: "password" });
                    let serverInfo = await server.GetProductInformation();
                    serverArray[(audNum - 1)] = serverInfo;

                }
                catch(err){ 
                    throw err;
                }
                
                
                break;
            case "DOLBY":
                // query dss for serial
                let prelim = mediaNetwork.split('.', 3);
                let oct = audNum + 100;
                let address = prelim[0] + '.' + prelim[1] + '.' + prelim[2] + '.' + oct;
                let dolby = new smi(address);
                try{ 
                    let componentInfos = await dolby.systemManagementRequest(smi_operation.SystemManagement.getDeviceComponentInfosRequest, { auditorium: audNum });
                    let compElemtents = componentInfos.elements;
                    let devices = [];
                    compElemtents.forEach(element => {
                        if(element.name === "deviceComponentInfo"){ 
                            let devProperties = element.elements;
                            let dev = {};
                            devProperties.forEach(p => {
                                switch (p.name) {
                                    case "ns5:deviceComponentId":
                                        dev.deviceComponentId = elements[0].text;
                                        break;
                                    case "ns5:location":
                                        dev.location = elements[0].text;
                                        break;
                                    case "ns5:deviceComponentType":
                                        dev.componentType = elements[0].text;
                                        break;
                                    case "ns5:deviceComponentModel":
                                        dev.componentModel = elements[0].text;
                                        break;
                                    case "ns5:deviceComponentProperty":
                                        
                                        break;
                                    default:
                                        break;
                                }
                                
                            });
                        }
                        
                    });
                    
                    let dolbyInfo = {
                        dataType: 'productInformation',
						productName: "Dolby",
						serialNumber: soapBody.elements[1].elements[0].text,
						systemId: soapBody.elements[2].elements[0].text,
						mainSoftwareVersion: soapBody.elements[3].elements[0].text,
						mainFirmwareVersion: soapBody.elements[4].elements[0].text,
						bundleVersion: soapBody.elements[5].elements[0].text
                    }
                }
                catch(err) {
                    throw err;
                }
                
                break;
        
            default:
                let err = "Theater info for " + element[0] + " is likely incorrect. Options are 'IMS' or 'DOLBY'. Please correct config file.";
                throw err;
        }
    });

    return serverTypeArr;
}

export class envDiscover {
    constructor(){

    }
    start(){
        return new Promise((resolve, reject) => {
            let test = getServerSerial();
            resolve(test);
        });
    }


}
