// query cinema server network for s/n @ content
import dotenv from 'dotenv';
import { doremi } from '../lib/ims/doremi.js';
import { smi } from '../lib/dss/dolbySMI.js';
import { smi_operation } from '../lib/dss/dolbySMIDefinitions.js';
// temp to test
import { dssResponse } from '../testjsobject.js';

// pull in config info
const result = dotenv.config();
if (result.error){ 
    console.log("Config file malformatted.  Please fix and restart service.");
    throw result.error;
}



async function getServerSerial() {
    const env = process.env
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
    
    for (const element of serverTypeArr){
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
                    let serverInfoJson = await server.GetProductInformation();
                    // logout to prevent session from consuming resources during many requests
                    let logout = await server.Logout();

                    let serverInfo = JSON.parse(serverInfoJson);

                    let imsSerial = {
                        auditorium: audNum,
                        serialNumber: serverInfo.GetProductInformationResponse.productInformation.serialNumber
                    }
                    serverArray[(audNum - 1)] = imsSerial;

                    
                    // TODO: 
                    //      get serial numbers and add into array for IMS
                    //      

                }
                catch(err){ 
                    throw err;
                }
                
                
                break;
            case "DOLBY":
                // query dss for serial
                let mediaPrelim = mediaNetwork.split('.', 3);
                let mediaOct = audNum + 100;
                let mediaAddress = mediaPrelim[0] + '.' + mediaPrelim[1] + '.' + mediaPrelim[2] + '.' + mediaOct;
                let dolby = new smi('10.95.128.30');
                try{ 
                    let componentInfos = await dolby.systemManagementRequest(smi_operation.SystemManagement.getDeviceComponentInfosRequest, { auditoriumNumber: audNum });
                    //let componentInfos = dssResponse;
                    let compElemtents = componentInfos.data;
                    let serverDevices = [];
                    compElemtents.forEach(element => {
                        if(element.name === "deviceComponentInfo"){ 
                            let devProperties = element.elements;
                            let dev = {};
                            devProperties.forEach(p => {
                                switch (p.name) {
                                    case "ns5:deviceComponentId":
                                        dev.deviceComponentId = p.elements[0].text;
                                        break;
                                    case "ns5:location":
                                        dev.location = p.elements[0].text;
                                        break;
                                    case "ns5:deviceComponentType":
                                        dev.componentType = p.elements[0].text;
                                        break;
                                    case "ns5:deviceComponentModel":
                                        dev.componentModel = p.elements[0].text;
                                        break;
                                    case "ns5:deviceComponentProperty":
                                        let property = {};
                                        p.elements.forEach(prop => {
                                            switch (prop.name) {
                                                case "ns5:type":
                                                    property.type = prop.elements[0].text;
                                                    break;
                                                case "ns5:name":
                                                    property.name = prop.elements[0].text;
                                                    break;
                                                case "ns5:value":
                                                    property.value = prop.elements[0].text;
                                                    break;
                                                default:
                                                    break;
                                            }
                                        });

                                        dev[property.name] = property.value;
                                        break;
                                    default:
                                        break;
                                }
                                
                            }); 
                            
                            serverDevices.push(dev);
                        }                 
                    });

                    // get decoder serials

                    let sn = {}
                    serverDevices.forEach(d => {    
                        if(d.componentType === "DECODER" && d.componentModel === "cat862"){
                            sn = {
                                auditorium: audNum,
                                serialNumber: d.serialnumber
                            }
                        }
                    });
                    serverArray[audNum - 1] = sn;
                }
                catch(err) {
                    throw err;
                }
                
                break;
        
            default:
                let err = "Theater info for " + element[0] + " is likely incorrect. Options are 'IMS' or 'DOLBY'. Please correct config file.";
                throw err;
        }
    };

    return serverArray;
}

export class envDiscover {
    constructor(){

    }
    start(){
        return new Promise(async (resolve, reject) => {
            let test = await getServerSerial();
            resolve(test);
        });
    }


}
