import { getRandomInt } from "../../../services/util/get-random-int"
import { makeId } from "../../../services/util/make-id"

import { EntityItem } from "../../../types/entity/entities/entity-item"


export const LIBRARY_DB: EntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00001',
                displayName: 'מיקי ברקוביץ\'',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%9E%D7%99%D7%A7%D7%99_vo8kjw.jpg'
            },
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'נולד כדי לנצח'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0023'],
            item: {
                writers: ['יחיאל ארזי'],
                publishers: ['משכל'],
                pageCount: 237,
                publishYear: 2004
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
                id: 'imageId00006',
                name: 'מיקי ברקוביץ\': נולד כדי לנצח - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669587732/library/%D7%9E%D7%99%D7%A7%D7%99_%D7%91%D7%A8%D7%A7%D7%95%D7%91%D7%99%D7%A5_-_%D7%A0%D7%95%D7%9C%D7%93_%D7%9B%D7%93%D7%99_%D7%9C%D7%A0%D7%A6%D7%97_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_sz62md.jpg'
            },
        ]
    },

    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00006',
                displayName: 'ערן זהבי',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669625106/profile/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_qpzdbr.png'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'סיפורו של ווינר'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                writers: ['אורן יוסיפוביץ\''],
                publishers: ['ידיעות אחרונות', 'ספרי חמד'],
                pageCount: 360,
                publishYear: 2017
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
                id: 'imageId00008',
                name: 'ערן זהבי: סיפורו של ווינר - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669628101/library/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%95_%D7%A9%D7%9C_%D7%95%D7%95%D7%99%D7%A0%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_yewzkr.jpg'
            },
            {
                id: 'imageId00009',
                name: 'ערן זהבי: סיפורו של ווינר - כריכה אחורית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669629656/library/%D7%A2%D7%A8%D7%9F_%D7%96%D7%94%D7%91%D7%99_-_%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%95_%D7%A9%D7%9C_%D7%95%D7%95%D7%99%D7%A0%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%90%D7%97%D7%95%D7%A8%D7%99%D7%AA_voqp4g.jpg'
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
                display: 'מכבי תל אביב! - אלופים'
            },
            ctgIds: ['categoryId0021', 'categoryId0025'],
            item: {
                writers: ['משה לרר'],
                publishYear: 1956
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
                id: 'imageId00010',
                name: 'מכבי תל אביב - אלופים! - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669756511/library/%D7%9E%D7%9B%D7%91%D7%99_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91_-_%D7%90%D7%9C%D7%95%D7%A4%D7%99%D7%9D_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_grgbx3.jpg'
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
                display: 'סיפורה של קבוצה - מכבי תל אביב כדורסל'
            },
            ctgIds: ['categoryId0021', 'categoryId0023'],
            item: {
                writers: ['דני דבורין'],
                publishers: ['אורבך'],
                pageCount: 151,
                publishYear: 1988
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
                id: 'imageId00011',
                name: 'סיפורה של קבוצה - מכבי תל אביב כדורסל - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669756772/library/%D7%A1%D7%99%D7%A4%D7%95%D7%A8%D7%94_%D7%A9%D7%9C_%D7%A7%D7%91%D7%95%D7%A6%D7%94_-_%D7%9E%D7%9B%D7%91%D7%99_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91_%D7%9B%D7%93%D7%95%D7%A8%D7%A1%D7%9C_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_m65kcb.jpg'
            },
        ]
    },
]