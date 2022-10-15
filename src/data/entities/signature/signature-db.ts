import { getRandomInt } from "../../../services/util/get-random-int"
import { makeId } from "../../../services/util/make-id"

import { SignatureEntityItem } from "../../../types/entity/entities/signature-entity-item"


export const SIGNATURE_DB: SignatureEntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'מיקי ברקוביץ'
            },
            branchIds: ['branchId00001', 'branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'מיקי ברקוביץ\''
            },
            ctgIds: ['categoryId0001', 'categoryId0003']
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

        images: ['signature_1.png', 'signature_2.png', 'signature_3.png', 'signature_4.png']
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'אבי נמני'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'אבי נמני'
            },
            ctgIds: ['categoryId0001', 'categoryId0002']
        },

        itemInfo: {
            view: getRandomInt(40, 480),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 40)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        images: ['signature_2.png', 'signature_3.png', 'signature_4.png', 'signature_5.png']
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'עומר דבדה'
            },
            branchIds: ['branchId00004'],
        },

        entityInfo: {
            name: {
                display: 'עומר דבדה'
            },
            ctgIds: ['categoryId0001', 'categoryId0005']
        },

        itemInfo: {
            view: getRandomInt(40, 480),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 40)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        images: ['signature_1.png', 'signature_4.png']
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                displayName: 'אריאל כצנלסון'
            },
            branchIds: ['branchId00003'],
        },

        entityInfo: {
            name: {
                display: 'אריאל כצנלסון'
            },
            ctgIds: ['categoryId0001', 'categoryId0004']
        },

        itemInfo: {
            view: getRandomInt(40, 480),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 40)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        images: ['signature_4.png']
    },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'קייל אנסינג'
    //         },
    //         branchIds: ['branchId00003'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'קייל אנסינג'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_2.png', 'signature_4.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'יותם בריגר'
    //         },
    //         branchIds: ['branchId00003'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'יותם בריגר'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_1.png', 'signature_4.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'נח וולף'
    //         },
    //         branchIds: ['branchId00003'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'נח וולף'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_3.png', 'signature_2.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'אייל פרולינגר'
    //         },
    //         branchIds: ['branchId00004'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'אייל פרולינגר'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_1.png', 'signature_2.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'פטר קוממניץ\''
    //         },
    //         branchIds: ['branchId00004'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'פטר קוממניץ\''
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_2.png', 'signature_5.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'טל בורנשטיין'
    //         },
    //         branchIds: ['branchId00002'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'טל בורנשטיין'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_3.png', 'signature_5.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'יותם הלפרין'
    //         },
    //         branchIds: ['branchId00002'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'יותם הלפרין'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_5.png', 'signature_1.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'ערן זהבי'
    //         },
    //         branchIds: ['branchId00001'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'ערן זהבי'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_5.png', 'signature_1.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'דור פרץ'
    //         },
    //         branchIds: ['branchId00001'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'דור פרץ'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_3.png', 'signature_2.png']
    // },

    // {
    //     id: makeId(),
    //     relatedInfo: {
    //         miniProfile: {
    //             displayName: 'דניאל פרץ'
    //         },
    //         branchIds: ['branchId00001'],
    //     },

    //     entityInfo: {
    //         name: {
    //             display: 'דניאל פרץ'
    //         },
    //     },

    //     itemInfo: {
    //         view: getRandomInt(40, 480),
    //         rate: {
    //             avg: getRandomInt(0, 5),
    //             raterCount: getRandomInt(0, 40)
    //         },
    //         editHistory: {
    //             total: getRandomInt(0, 20),
    //             lastEditDate: new Date()
    //         }
    //     },

    //     images: ['signature_4.png', 'signature_2.png']
    // },
]