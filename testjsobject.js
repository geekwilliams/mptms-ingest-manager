export let dssResponse = {
    "elements": [
        {
            "type": "element",
            "name": "env:Envelope",
            "attributes": {
                "xmlns:env": "http://schemas.xmlsoap.org/soap/envelope/"
            },
            "elements": [
                {
                    "type": "element",
                    "name": "env:Header"
                },
                {
                    "type": "element",
                    "name": "env:Body",
                    "elements": [
                        {
                            "type": "element",
                            "name": "ns2:getDeviceComponentInfosResponse",
                            "attributes": {
                                "xmlns:ns2": "http://www.dolby.com/dcinema/ws/smi/v1_0",
                                "xmlns:ns3": "http://www.dolby.com/dcinema/ws/smi/v1/schemas/fault",
                                "xmlns:ns4": "http://www.dolby.com/dcinema/ws/smi/v1/schemas/common",
                                "xmlns:ns5": "http://www.dolby.com/dcinema/ws/smi/v1/schemas/systemmanagement",
                                "xmlns:ns6": "http://www.dolby.com/dcinema/ws/smi/v1_1",
                                "xmlns:ns7": "http://www.dolby.com/dcinema/ws/smi/v1_2"
                            },
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "deviceComponentInfo",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentId",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "urn:uuid:d2e618b3-cd21-47d0-852d-f548eba05dea"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:location",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentType",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "AUDIO"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentModel",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "cp750"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:supportsLogRetrieval",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "false"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "HARDWARE"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "hardware_rev"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "NETWORK"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "ethernet_address"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "00:00:00:09:26:54"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VERSION"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "1.2.8.3"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "MODEL"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "model"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "CP750"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "deviceComponentInfo",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentId",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "urn:uuid:a7f02cf8-b964-4d17-8e12-3d907dd9a83f"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:location",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentType",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "SERVER"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentModel",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "server"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:supportsLogRetrieval",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "false"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VERSION"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "software"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "04.09.08.17"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VERSION"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "software compatibility"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "04.09.08.00"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "deviceComponentInfo",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentId",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "urn:uuid:de2e2e79-6f3f-4855-89ce-fcae21a631d2"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:location",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentType",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "AUTOMATION"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentModel",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "serialautomation"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:supportsLogRetrieval",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "false"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "MODEL"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "model"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Serial Automation"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "deviceComponentInfo",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentId",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "urn:uuid:99eafd36-e52f-4c9a-8e2e-ffbfe57b2c63"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:location",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentType",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "PLAYER"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentModel",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "screenserver"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:supportsLogRetrieval",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "true"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VERSION"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "4.9.1.18"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Theatre Link Speed"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "1000Mb/s"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "serial-number"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "207383019088"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Theatre Link Address"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "10.95.129.102"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Auditorium Link Address"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "10.18.128.112"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet Automation Device Connection Status"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "No"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Auditorium Link Speed"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "100Mb/s"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "NTP - Configured Server"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "10.95.128.30"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Theatre Cable Present"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "yes"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Decoder FIPS 140-2 Validated Mode"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "true"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "RAID - Drive 4 - Reallocated Sectors"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "NTP - Connected Server"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "10.95.128.30"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "RAID - Drive 1 - Reallocated Sectors"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Atmos Data Cable Present"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "no"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Media Block Cable Present"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "yes"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "RAID - Drive 3 - Reallocated Sectors"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "123"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Media Block Upgrade - Last Time"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Wed Apr 04 01:05:19 MDT 2018"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Media Block Link Speed"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "1000Mb/s"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Media Block Upgrade - Last Status"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Success"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "License Loading During Playback Mode"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "ON"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "RAID - Progress"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0%"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Media Block Link Address"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "169.254.1.1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "RAID - Drive 2 - Reallocated Sectors"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Ethernet - Auditorium Cable Present"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "yes"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Media Block Upgrade - Last Version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "4.8.6.2"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "RAID - Array State"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "OK"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "deviceComponentInfo",
                                    "elements": [
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentId",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "urn:uuid:a24f6f99-6ed6-4790-b7a5-014052ae22c1"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:location",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "2"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentType",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "DECODER"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentModel",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "cat862"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:supportsLogRetrieval",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "text": "true"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VIDEO"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "outputformat"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "2048x1080 24fps"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "HARDWARE"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "serialnumber"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "513545"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "module1_version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0x01000917"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "HARDWARE"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "publickeyhash"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "tC01F8cOSs9TEXo17UwpJpbgYkI="
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "certificate_present"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "yes"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "reconnect_count"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "33"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "module4_version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0x8000003a"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VIDEO"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "inputformat"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "2048x1080 24fps"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "SYSTEM"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "av_delay"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "system_reconnect"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Tue Feb  8 07:01:16 2022"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "link_encryption"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Cinelink II TLS"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "buffer_underflows"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "mac_address"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "00:D0:46:05:09:01 "
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "AUDIO"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "inputsamplingrate"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "48kHz"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "state"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Init State"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "AUDIO"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "outputsamplingrate"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "48kHz"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "audio_underflows"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "module2_version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0x00030004"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VIDEO"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "inputcoding"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "JPEG 2000"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "module3_version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "0x54030002"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "DEBUG"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "system_restart"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "Mon Jan 24 00:31:57 2022"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VERSION"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "hardware.version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "4"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "element",
                                            "name": "ns5:deviceComponentProperty",
                                            "elements": [
                                                {
                                                    "type": "element",
                                                    "name": "ns5:type",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "VERSION"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:name",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "software.version"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "element",
                                                    "name": "ns5:value",
                                                    "elements": [
                                                        {
                                                            "type": "text",
                                                            "text": "4.8.6.2"
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
            ]
        }
    ]
}