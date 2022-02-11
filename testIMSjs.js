export let ims = {
    "elements": [
        {
            "type": "element",
            "name": "SOAP-ENV:Envelope",
            "attributes": {
                "xmlns:SOAP-ENV": "http://schemas.xmlsoap.org/soap/envelope/",
                "xmlns:xsi": "http://www.w3.org/1999/XMLSchema-instance",
                "xmlns:xsd": "http://www.w3.org/1999/XMLSchema",
                "xmlns:SOAP-ENC": "http://schemas.xmlsoap.org/soap/encoding/",
                "xmlns:ns1": "http://www.doremilabs.com/dc/dcp/ws/v1_0",
                "xmlns:com": "http://www.doremilabs.com/dc/dcp/ws/v1/schemas/common",
                "xmlns:sys": "http://www.doremilabs.com/dc/dcp/ws/v1/schemas/systeminformation"
            },
            "elements": [
                {
                    "type": "element",
                    "name": "SOAP-ENV:Body",
                    "elements": [
                        {
                            "type": "element",
                            "name": "ns1:GetProductInformationResponse",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "productInformation",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "sys:productName",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "IMS2000"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "sys:serialNumber",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "317278"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "sys:systemId",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "urn:uuid:00000000-0000-0000-0000-000000000000"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "sys:mainSoftwareVersion",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2.8.30-0\n"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "sys:mainFirmwareVersion",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "4.6.6-0"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "sys:bundleVersion"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}