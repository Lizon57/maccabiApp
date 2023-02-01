import { getRandomInt } from "../../../services/util/get-random-int"

import { EntityItem } from "../../../types/entity/entities/entity-item"


export const LIBRARY_DB: EntityItem[] = [
    {
        id: 'libraryId00001',
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
                publishYear: 1997,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
        id: 'libraryId00002',
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
                publishers: ['ידיעות ספרים'],
                pageCount: 360,
                publishYear: 2017,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
        id: 'libraryId00003',
        relatedInfo: {
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'מכבי תל אביב! - אלופים'
            },
            ctgIds: ['categoryId0021', 'categoryId0025'],
            item: {
                writers: ['משה לרר', 'משה אופניק'],
                publishYear: 1956,
                publishers: ['פרסומי ספורט'],
                pageCount: 33,
                isBiography: false,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
        id: 'libraryId00004',
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
                publishYear: 1988,
                isBiography: false,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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

    {
        id: 'libraryId00005',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00007',
                displayName: 'יוסף גולדשטיין',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672564100/profile/%D7%99%D7%95%D7%A1%D7%A3_%D7%92%D7%95%D7%9C%D7%93%D7%A9%D7%98%D7%99%D7%99%D7%9F_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_rnb4n4.jpg'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'יוסף גולדשטיין האיש והאגדה'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                writers: ['אורלי גולדשטיין'],
                publishers: ['טפר הוצאה לאור'],
                pageCount: 245,
                publishYear: 2020,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                name: 'יוסף גולדשטיין האיש והאגדה - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672563822/library/%D7%99%D7%95%D7%A1%D7%A3_%D7%92%D7%95%D7%9C%D7%93%D7%A9%D7%98%D7%99%D7%99%D7%9F_%D7%94%D7%90%D7%99%D7%A9_%D7%95%D7%94%D7%90%D7%92%D7%93%D7%94_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_qfazvs.jpg'
            },
        ]
    },

    {
        id: 'libraryId00006',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00008',
                displayName: 'אבי כהן',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672564400/profile/%D7%90%D7%91%D7%99_%D7%9B%D7%94%D7%9F_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_hvle3i.jpg'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'הליברו - אבי כהן שחקן וג\'נטלמן'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                writers: ['מוטי אקסמיט'],
                publishers: ['מילים מדברות'],
                pageCount: 450,
                publishYear: 2021,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00019',
                name: 'הליברו - אבי כהן שחקן וג\'נטלמן - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672564662/library/%D7%94%D7%9C%D7%99%D7%91%D7%A8%D7%95_-_%D7%90%D7%91%D7%99_%D7%9B%D7%94%D7%9F_%D7%A9%D7%97%D7%A7%D7%9F_%D7%95%D7%92_%D7%A0%D7%98%D7%9C%D7%9E%D7%9F_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_pdqls0.jpg'
            },
        ]
    },

    {
        id: 'libraryId00007',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00009',
                displayName: 'ג\'רי בית הלוי',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672569196/profile/%D7%92_%D7%A8%D7%99_%D7%91%D7%99%D7%AA_%D7%94%D7%9C%D7%95%D7%99_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_vlcn3c.jpg'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'חיי סביב הכדור'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                writers: ['משה לרר', 'ישעיהו פורת'],
                publishers: ['מוטיב'],
                pageCount: 190,
                publishYear: 1992,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00021',
                name: 'ג\'רי בית הלוי - חיי סביב הכדור - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672569433/library/%D7%92_%D7%A8%D7%99_%D7%91%D7%99%D7%AA_%D7%94%D7%9C%D7%95%D7%99_-_%D7%97%D7%99%D7%99_%D7%A1%D7%91%D7%99%D7%91_%D7%94%D7%9B%D7%93%D7%95%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_qcqnhl.jpg'
            },
        ]
    },

    {
        id: 'libraryId00008',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00010',
                displayName: 'שורה אובארוב',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672569773/profile/%D7%A9%D7%95%D7%A8%D7%94_%D7%90%D7%95%D7%91%D7%90%D7%A8%D7%95%D7%91_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_bkhr5v.jpg'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'על כדורגל ועל עצמי'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                writers: ['אלכסנדר אובארוב'],
                publishers: ['ס. מ. אלכס'],
                pageCount: 127,
                publishYear: 2004,
                isBiography: true,
                isTranslated: true,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00023',
                name: 'על כדורגל ועל עצמי - שורה אובארוב',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570010/library/%D7%A2%D7%9C_%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%95%D7%A2%D7%9C_%D7%A2%D7%A6%D7%9E%D7%99_-_%D7%A9%D7%95%D7%A8%D7%94_%D7%90%D7%95%D7%91%D7%90%D7%A8%D7%95%D7%91_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_hwz0ql.jpg'
            },
        ]
    },

    {
        id: 'libraryId00009',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00011',
                displayName: 'אלי פוקס',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570346/profile/%D7%90%D7%9C%D7%99_%D7%A4%D7%95%D7%A7%D7%A1_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_mbuavv.png'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'הקפטן של הכדורגל הישראלי'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                publishers: ['דיוקני ספורט'],
                pageCount: 54,
                publishYear: 1957,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00025',
                name: 'הקפטן של הכדורגל הישראלי - אלי פוקס - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570411/library/%D7%94%D7%A7%D7%A4%D7%98%D7%9F_%D7%A9%D7%9C_%D7%94%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_-_%D7%90%D7%9C%D7%99_%D7%A4%D7%95%D7%A7%D7%A1_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_mmdvnq.jpg'
            },
        ]
    },

    {
        id: 'libraryId00010',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00012',
                displayName: 'אגון פולק',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570547/profile/%D7%90%D7%92%D7%95%D7%9F_%D7%A4%D7%95%D7%9C%D7%A7_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_m7voxa.jpg'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'חוויותיו והרפתקאותיו של שחקן כדורגל בחמש יבשות תבל - באספקלריה אישית של אגון פולק'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                writers: ['עמנואל גיל'],
                publishers: ['מכון וינגייט'],
                pageCount: 128,
                publishYear: 1976,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00027',
                name: 'חוויותיו והרפתקאותיו של  שחקן כדורגל בחמש יבשות תבל באספקלריה אישית של אגון פולק - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570772/library/%D7%97%D7%95%D7%95%D7%99%D7%95%D7%AA%D7%99%D7%95_%D7%95%D7%94%D7%A8%D7%A4%D7%AA%D7%A7%D7%90%D7%95%D7%AA%D7%99%D7%95_%D7%A9%D7%9C_%D7%A9%D7%97%D7%A7%D7%9F_%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%91%D7%97%D7%9E%D7%A9_%D7%99%D7%91%D7%A9%D7%95%D7%AA_%D7%AA%D7%91%D7%9C_%D7%91%D7%90%D7%A1%D7%A4%D7%A7%D7%9C%D7%A8%D7%99%D7%94_%D7%90%D7%99%D7%A9%D7%99%D7%AA_%D7%A9%D7%9C_%D7%90%D7%92%D7%95%D7%9F_%D7%A4%D7%95%D7%9C%D7%A7_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_yuovxk.jpg'
            },
        ]
    },

    {
        id: 'libraryId00011',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00013',
                displayName: 'שייע גלזר',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571067/profile/%D7%A9%D7%99%D7%99%D7%A2_%D7%92%D7%9C%D7%96%D7%A8_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_nk1xt8.png'
            },
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'החולצה מספר 9'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025'],
            item: {
                publishers: ['דיוקני ספורט'],
                pageCount: 66,
                publishYear: 1958,
                isBiography: true,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00029',
                name: 'החולצה מספר 9 - שייע גלזר - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571127/library/%D7%94%D7%97%D7%95%D7%9C%D7%A6%D7%94_%D7%9E%D7%A1%D7%A4%D7%A8_9_-_%D7%A9%D7%99%D7%99%D7%A2_%D7%92%D7%9C%D7%96%D7%A8-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_selvup.jpg'
            },
        ]
    },

    {
        id: 'libraryId00012',
        relatedInfo: {
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: 'מאה שנים ראשונות'
            },
            ctgIds: ['categoryId0021', 'categoryId0025'],
            item: {
                writers: ['אשר גולדברג', 'דני דבורין'],
                publishYear: 2006,
                publishers: ['הוצאת מדיה'],
                pageCount: 275,
                isBiography: false,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00030',
                name: 'מאה שנים ראשונות - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571367/library/%D7%9E%D7%90%D7%94_%D7%A9%D7%A0%D7%99%D7%9D_%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%95%D7%AA_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_xzilcx.jpg'
            },
        ]
    },

    {
        id: 'libraryId00013',
        relatedInfo: {
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                display: '102 שנים ראשונות'
            },
            ctgIds: ['categoryId0021', 'categoryId0025'],
            item: {
                writers: ['אשר גולדברג', 'דני דבורין'],
                publishYear: 2008,
                publishers: ['הוצאת מדיה'],
                pageCount: 276,
                isBiography: false,
                isTranslated: false,
            }
        },

        itemInfo: {
            view: 0,
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
                id: 'imageId00031',
                name: '102 שנים ראשונות - כריכה קדמית',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571615/library/102_%D7%A9%D7%A0%D7%99%D7%9D_%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%95%D7%AA_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_dnpejw.jpg'
            },
        ]
    },
]