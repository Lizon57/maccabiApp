import { getRandomInt } from "../../../services/util/get-random-int"

import { ImageEntityItem } from "../../../types/entity/entities/image-entity-item"


export const IMAGE_DB: ImageEntityItem[] = [
    {
        id: 'imageId00001',

        entityInfo: {
            name: {
                display: 'חתימה של מיקי ברקוביץ\''
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785525/signature/signature_1_h8yitn.png',
            ctgIds: ['categoryId0006', 'categoryId0007', 'categoryId0011']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00002',

        entityInfo: {
            name: {
                display: 'אבי נמני באימון'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%90%D7%91%D7%99_aalabt.jpg',
            ctgIds: ['categoryId0006', 'categoryId0007', 'categoryId0017', 'categoryId0018']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00003',

        entityInfo: {
            name: {
                display: 'מיקי ברקוביץ\' במשחק לא ידוע'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%9E%D7%99%D7%A7%D7%99_vo8kjw.jpg',
            ctgIds: ['categoryId0006', 'categoryId0008', 'categoryId0011', 'categoryId0017']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00004',

        entityInfo: {
            name: {
                display: 'עומר דבדה במשחק לא ידוע'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%A2%D7%95%D7%9E%D7%A8_o2neky.jpg',
            ctgIds: ['categoryId0006', 'categoryId0010', 'categoryId0016', 'categoryId0017', 'categoryId0019']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00005',

        entityInfo: {
            name: {
                display: 'אריאל כצנלסון במשחק לא ידוע'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%90%D7%A8%D7%99%D7%90%D7%9C_uzyt25.jpg',
            ctgIds: ['categoryId0006', 'categoryId0009', 'categoryId0015', 'categoryId0017', 'categoryId0020']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00006',

        entityInfo: {
            name: {
                display: 'מיקי ברקוביץ\': נולד כדי לנצח - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669587732/library/%D7%9E%D7%99%D7%A7%D7%99_%D7%91%D7%A8%D7%A7%D7%95%D7%91%D7%99%D7%A5_-_%D7%A0%D7%95%D7%9C%D7%93_%D7%9B%D7%93%D7%99_%D7%9C%D7%A0%D7%A6%D7%97_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_sz62md.jpg',
            ctgIds: ['categoryId0006', 'categoryId0008', 'categoryId0011', 'categoryId0021', 'categoryId0022', 'categoryId0023']
        },

        itemInfo: {
            view: getRandomInt(100, 300),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 100)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00007',

        entityInfo: {
            name: {
                display: 'ערן זהבי - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669625106/profile/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_qpzdbr.png',
            ctgIds: ['categoryId0006', 'categoryId0007', 'categoryId0017', 'categoryId0024']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00008',

        entityInfo: {
            name: {
                display: 'ערן זהבי: סיפורו של ווינר - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669628101/library/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%95_%D7%A9%D7%9C_%D7%95%D7%95%D7%99%D7%A0%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_yewzkr.jpg',
            ctgIds: ['categoryId0006', 'categoryId0021', 'categoryId0022', 'categoryId0025']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00009',

        entityInfo: {
            name: {
                display: 'ערן זהבי: סיפורו של ווינר - כריכה אחורית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669629656/library/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%95_%D7%A9%D7%9C_%D7%95%D7%95%D7%99%D7%A0%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%90%D7%97%D7%95%D7%A8%D7%99%D7%AA_voqp4g.jpg',
            ctgIds: ['categoryId0006', 'categoryId0021', 'categoryId0022', 'categoryId0025']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00010',

        entityInfo: {
            name: {
                display: 'מכבי תל אביב - אלופים! - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669629656/library/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%95_%D7%A9%D7%9C_%D7%95%D7%95%D7%99%D7%A0%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%90%D7%97%D7%95%D7%A8%D7%99%D7%AA_voqp4g.jpg',
            ctgIds: ['categoryId0006', 'categoryId0021', 'categoryId0025']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },

    {
        id: 'imageId00011',

        entityInfo: {
            name: {
                display: 'סיפורה של קבוצה - מכבי תל אביב כדורסל - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669756772/library/%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%94_%D7%A9%D7%9C_%D7%A7%D7%91%D7%95%D7%A6%D7%94_-_%D7%9E%D7%9B%D7%91%D7%99_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91_%D7%9B%D7%93%D7%95%D7%A8%D7%A1%D7%9C_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_m65kcb.jpg',
            ctgIds: ['categoryId0006', 'categoryId0021', 'categoryId0023']
        },

        itemInfo: {
            view: getRandomInt(40, 500),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 500)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },
    },
]