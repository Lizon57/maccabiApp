import { makeId } from "../../../services/util/make-id"
import { getRandomInt } from "../../../services/util/get-random-int"

import { EntityItem } from "../../../types/entity/entities/entity-item"


export const CROWD_ORGANIZATION_DB: EntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00001', 'branchId00002', 'branchId00003', 'branchId00004'],
        },

        entityInfo: {
            name: {
                display: 'השחקן ה-12'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0030'],
            item: {
                dateOfActivity: {
                    isActive: false,
                    start: {
                        year: 2000
                    },
                    end: {
                        day: 30,
                        month: 12,
                        year: 2012
                    }
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00012',
                name: 'השחקן ה-12 - סמל',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985837/crowd-organization/%D7%94%D7%A9%D7%97%D7%A7%D7%9F_%D7%94-12_-_%D7%A1%D7%9E%D7%9C_rhesks.png'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'מכבי פנאטיקס'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0029'],
            item: {
                dateOfActivity: {
                    isActive: true,
                    start: {
                        day: 31,
                        month: 12,
                        year: 2012,
                    }
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00013',
                name: 'מכבי פנאטיקס - סמל',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%9E%D7%9B%D7%91%D7%99_%D7%A4%D7%A0%D7%90%D7%98%D7%99%D7%A7%D7%A1_-_%D7%A1%D7%9E%D7%9C_f8f7mu.jpg'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'אולטראס מכבי 96'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0029'],
            item: {
                dateOfActivity: {
                    isActive: true,
                    start: {
                        year: 1996
                    },
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00013',
                name: 'אולטראס מכבי 96 - סמל',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%90%D7%95%D7%9C%D7%98%D7%A8%D7%90%D7%A1_%D7%9E%D7%9B%D7%91%D7%99_96_-_%D7%A1%D7%9E%D7%9C_hiaydd.jpg'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'אולטראס מכבי 96'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0030'],
            item: {
                dateOfActivity: {
                    isActive: false,
                    start: {
                        year: 1996
                    },
                    end: {
                        year: 2013
                    }
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00013',
                name: 'אולטראס מכבי 96 - סמל',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%90%D7%95%D7%9C%D7%98%D7%A8%D7%90%D7%A1_%D7%9E%D7%9B%D7%91%D7%99_96_-_%D7%A1%D7%9E%D7%9C_hiaydd.jpg'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00001', 'branchId00002', 'branchId00003', 'branchId00004'],
        },

        entityInfo: {
            name: {
                display: 'אחים לסמל'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0029'],
            item: {
                dateOfActivity: {
                    isActive: true,
                    start: {
                        year: 2012
                    },
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00014',
                name: 'אחים לסמל - סמל',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%90%D7%97%D7%99%D7%9D_%D7%9C%D7%A1%D7%9E%D7%9C_-_%D7%A1%D7%9E%D7%9C_so8nsv.jpg'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'The gate'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0029'],
            item: {
                dateOfActivity: {
                    isActive: true,
                    start: {
                        year: 2017
                    },
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00015',
                name: 'The gate - סמל',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/the_gate_-_%D7%A1%D7%9E%D7%9C_cn7f3d.jpg'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'Gate 11'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0030'],
            item: {
                dateOfActivity: {
                    isActive: false,
                    end: {
                        year: 2017
                    }
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'Gate 7'
            },
            ctgIds: ['categoryId0026', 'categoryId0027', 'categoryId0030'],
            item: {
                dateOfActivity: {
                    isActive: false,
                    start: {
                        year: 2005
                    },
                    end: {
                        year: 2017
                    }
                },
            }
        },

        itemInfo: {
            view: getRandomInt(40, 1000000),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 1000000)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
        ]
    },
]