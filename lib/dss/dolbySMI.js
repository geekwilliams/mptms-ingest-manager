// Dolby SMI Soap definitions for use with DSL200-DSS servers v_4.9.5.2
// ---Soap requests requiring server response must be async due to http. 
// ---make sure to accound for this when issuing soap requests 
// ---input "params" for methods are to be objects. Check wsdl's for 
//    detailed info about options for each method.  Some methods are only
//    useful if targeted at house servers and not TMS.  
import { soapBody as soapGen } from '../dss/soap.js';
import { httpRequest } from '../http.js';
import convert from 'xml-js';

// TODO: Refactor for ES6
//       Update response's to be js objects instead of raw xml
//          -SystemManagementRequest *done*  
//
// ES5
//const httpRequest = require('./required/http');
//const soapGen = require('./required/smiSoapGenerator');

export class smi {
    constructor(url, sessionId, args) {
        this.url = url;
		this.sessionId = sessionId;
        this.args = args;
        // endpoints: 
        this.ContentManagement = "/dcinema/ws/smi/v1/ContentManagementService";
        this.LicenseManagement = "/dcinema/ws/smi/v1/LicenseManagementService";
        this.PlaybackControl = "/dcinema/ws/smi/v1/PlaybackControlService";
        this.ShowManagement = "/dcinema/ws/smi/v1/ShowManagementService";
        this.SystemManagement = "/dcinema/ws/smi/v1/SystemManagementService";
        this.TransferManagement = "/dcinema/ws/smi/v1/TransferManagementService";
    }

    // CONTENT MANAGEMENT SERVICE
    contentManagementRequest(req, params) {
        return new Promise((resolve, reject) => {
            let s = new soapGen();
            let request = s.generateSoapRequest(req, params);
            let netReq = new httpRequest(this.url, this.ContentManagement);

            // make call
            netReq.POST(request)
                .then(response => {resolve(response)})
                .catch(response => {reject(response)});
            
        });
    }
    
    // LICENSE MANAGEMENT SERVICE
    licenseManagementRequest(req, params) {
        return new Promise(async (resolve, reject) => {
            let s = new soapGen();
            let request = s.generateSoapRequest(req, params);
            let netReq = new httpRequest(this.url, this.LicenseManagement);

            // make call
            netReq.POST(request)
                .then(response => {resolve(response)})
                .catch(response => {reject(response)});
        });
    }

    // PLAYBACK CONTROL SERVICE (must use enpoint on house servers, not TMS)
    playbackControlRequest(req, params) {
        return new Promise(async (resolve, reject) => {
            let s = new soapGen();
            let request = s.generateSoapRequest(req, params);
        
            let netReq = new httpRequest(this.url, this.PlaybackControl);

            // make call
            netReq.POST(request)
                .then(response => {resolve(response)})
                .catch(response => {reject(response)});
        });
    }

    // SHOW MANAGEMENT SERVICE
    showManagementRequest(req, params) {
        return new Promise(async (resolve, reject) => {
            let s = new soapGen();
            let request = s.generateSoapRequest(req, params);
            let netReq = new httpRequest(this.url, this.ShowManagement);

            // make call
            netReq.POST(request)
                .then(response => {resolve(response)})
                .catch(response => {reject(response)});
        });
    }

    // SYSTEM MANAGEMENT SERVICE--Use enpoint on Show Servers for management
    systemManagementRequest(req, params) {
        return new Promise(async (resolve, reject) => {
            let s = new soapGen();
            let request = s.generateSoapRequest(req, params);
            
            let netReq = new httpRequest(this.url, this.SystemManagement, '8080');

            // make call
            netReq.POST(request)
                .then((response) => {
                    let jsObject = convert.xml2js(response, { compact: false, spaces: 4});
                    let smr = jsObject.elements[0].elements[1].elements[0];
                    let dt = smr.name.split(':', 3);
                    let infos = { 
                        dataType: dt[1],
                        data: smr.elements
                    }
                    resolve(infos);
                })
                .catch(response => {reject(response)});
        });
    }

    // TRANSFER MANAGEMENT SERVICE
    transferManagementRequest(req, params) {
        return new Promise(async (resolve, reject) => {
            let s = new soapGen();
            let request = s.generateSoapRequest(req, params);
            let netReq = new httpRequest(this.url, this.TransferManagement);

            // make call
            netReq.POST(request)
                .then(response => {resolve(response)})
                .catch(response => {reject(response)});
        });
    }
}
