import { getRandomInt } from "../../../services/util/get-random-int"

import { EntityItem } from "../../../types/entity/entities/entity-item"


export const IMAGE_DB: EntityItem[] = [
    {
        id: 'imageId00001',

        entityInfo: {
            name: {
                display: 'חתימה של מיקי ברקוביץ\''
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785525/signature/signature_1_h8yitn.png',
            ctgIds: ['categoryId0001', 'categoryId0007', 'categoryId0011']
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
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0018']
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
            ctgIds: ['categoryId0008', 'categoryId0011', 'categoryId0017']
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
            ctgIds: ['categoryId0010', 'categoryId0016', 'categoryId0017', 'categoryId0019']
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
            ctgIds: ['categoryId0009', 'categoryId0015', 'categoryId0017', 'categoryId0020']
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
            ctgIds: ['categoryId0008', 'categoryId0011', 'categoryId0021', 'categoryId0022', 'categoryId0023']
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
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0024']
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
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025']
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
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0025']
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
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1669756511/library/%D7%9E%D7%9B%D7%91%D7%99_%D7%AA%D7%9C_%D7%90%D7%91%D7%99%D7%91_-_%D7%90%D7%9C%D7%95%D7%A4%D7%99%D7%9D_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_grgbx3.jpg',
            ctgIds: ['categoryId0021', 'categoryId0025']
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
            ctgIds: ['categoryId0021', 'categoryId0023']
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
        id: 'imageId00012',

        entityInfo: {
            name: {
                display: 'השחקן ה-12 - סמל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985837/crowd-organization/%D7%94%D7%A9%D7%97%D7%A7%D7%9F_%D7%94-12_-_%D7%A1%D7%9E%D7%9C_rhesks.png',
            ctgIds: ['categoryId0027', 'categoryId0030']
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
        id: 'imageId00013',

        entityInfo: {
            name: {
                display: 'מכבי פנאטיקס - סמל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%9E%D7%9B%D7%91%D7%99_%D7%A4%D7%A0%D7%90%D7%98%D7%99%D7%A7%D7%A1_-_%D7%A1%D7%9E%D7%9C_f8f7mu.jpg',
            ctgIds: ['categoryId0027', 'categoryId0029']
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
        id: 'imageId00014',

        entityInfo: {
            name: {
                display: 'אולטראס מכבי 96 - סמל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%90%D7%95%D7%9C%D7%98%D7%A8%D7%90%D7%A1_%D7%9E%D7%9B%D7%91%D7%99_96_-_%D7%A1%D7%9E%D7%9C_hiaydd.jpg',
            ctgIds: ['categoryId0027', 'categoryId0030']
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
        id: 'imageId00015',

        entityInfo: {
            name: {
                display: 'אחים לסמל - סמל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/%D7%90%D7%97%D7%99%D7%9D_%D7%9C%D7%A1%D7%9E%D7%9C_-_%D7%A1%D7%9E%D7%9C_so8nsv.jpg',
            ctgIds: ['categoryId0027', 'categoryId0029']
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
        id: 'imageId00016',

        entityInfo: {
            name: {
                display: 'The gate - סמל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1671985838/crowd-organization/the_gate_-_%D7%A1%D7%9E%D7%9C_cn7f3d.jpg',
            ctgIds: ['categoryId0027', 'categoryId0029']
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
        id: 'imageId00017',

        entityInfo: {
            name: {
                display: 'יוסף גולדשטיין האיש והאגדה - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672563822/library/%D7%99%D7%95%D7%A1%D7%A3_%D7%92%D7%95%D7%9C%D7%93%D7%A9%D7%98%D7%99%D7%99%D7%9F_%D7%94%D7%90%D7%99%D7%A9_%D7%95%D7%94%D7%90%D7%92%D7%93%D7%94_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_qfazvs.jpg',
            ctgIds: ['categoryId0007', 'categoryId0011', 'categoryId0021', 'categoryId0022', 'categoryId0025']
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
        id: 'imageId00018',

        entityInfo: {
            name: {
                display: 'יוסף גולדשטיין - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672564100/profile/%D7%99%D7%95%D7%A1%D7%A3_%D7%92%D7%95%D7%9C%D7%93%D7%A9%D7%98%D7%99%D7%99%D7%9F_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_rnb4n4.jpg',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0031']
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
        id: 'imageId00019',

        entityInfo: {
            name: {
                display: 'אבי כהן - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672564400/profile/%D7%90%D7%91%D7%99_%D7%9B%D7%94%D7%9F_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_hvle3i.jpg',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0032']
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
        id: 'imageId00020',

        entityInfo: {
            name: {
                display: 'הליברו - אבי כהן שחקן וג\'נטלמן - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672564662/library/%D7%94%D7%9C%D7%99%D7%91%D7%A8%D7%95_-_%D7%90%D7%91%D7%99_%D7%9B%D7%94%D7%9F_%D7%A9%D7%97%D7%A7%D7%9F_%D7%95%D7%92_%D7%A0%D7%98%D7%9C%D7%9E%D7%9F_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_pdqls0.jpg',
            ctgIds: ['categoryId0007', 'categoryId0021', 'categoryId0022', 'categoryId0025', 'categoryId0032',]
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
        id: 'imageId00021',

        entityInfo: {
            name: {
                display: 'ג\'רי בית הלוי - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672569196/profile/%D7%92_%D7%A8%D7%99_%D7%91%D7%99%D7%AA_%D7%94%D7%9C%D7%95%D7%99_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_vlcn3c.jpg',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0033']
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
        id: 'imageId00022',

        entityInfo: {
            name: {
                display: 'ג\'רי בית הלוי - חיי סביב הכדור - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672569433/library/%D7%92_%D7%A8%D7%99_%D7%91%D7%99%D7%AA_%D7%94%D7%9C%D7%95%D7%99_-_%D7%97%D7%99%D7%99_%D7%A1%D7%91%D7%99%D7%91_%D7%94%D7%9B%D7%93%D7%95%D7%A8_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_qcqnhl.jpg',
            ctgIds: ['categoryId0007', 'categoryId0021', 'categoryId0022', 'categoryId0025', 'categoryId0033',]
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
        id: 'imageId00023',

        entityInfo: {
            name: {
                display: 'שורה אובארוב - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672569773/profile/%D7%A9%D7%95%D7%A8%D7%94_%D7%90%D7%95%D7%91%D7%90%D7%A8%D7%95%D7%91_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_bkhr5v.jpg',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0034']
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
        id: 'imageId00024',

        entityInfo: {
            name: {
                display: 'על כדורגל ועל עצמי - שורה אובארוב - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570010/library/%D7%A2%D7%9C_%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%95%D7%A2%D7%9C_%D7%A2%D7%A6%D7%9E%D7%99_-_%D7%A9%D7%95%D7%A8%D7%94_%D7%90%D7%95%D7%91%D7%90%D7%A8%D7%95%D7%91_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_hwz0ql.jpg',
            ctgIds: ['categoryId0007', 'categoryId0021', 'categoryId0022', 'categoryId0025', 'categoryId0034',]
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
        id: 'imageId00025',

        entityInfo: {
            name: {
                display: 'אלי פוקס - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570346/profile/%D7%90%D7%9C%D7%99_%D7%A4%D7%95%D7%A7%D7%A1_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_mbuavv.png',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0035']
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
        id: 'imageId00026',

        entityInfo: {
            name: {
                display: 'הקפטן של הכדורגל הישראלי - אלי פוקס - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570411/library/%D7%94%D7%A7%D7%A4%D7%98%D7%9F_%D7%A9%D7%9C_%D7%94%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99_-_%D7%90%D7%9C%D7%99_%D7%A4%D7%95%D7%A7%D7%A1_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_mmdvnq.jpg',
            ctgIds: ['categoryId0007', 'categoryId0021', 'categoryId0022', 'categoryId0025', 'categoryId0035',]
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
        id: 'imageId00027',

        entityInfo: {
            name: {
                display: 'אגון פולק - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570547/profile/%D7%90%D7%92%D7%95%D7%9F_%D7%A4%D7%95%D7%9C%D7%A7_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_m7voxa.jpg',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0036']
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
        id: 'imageId00028',

        entityInfo: {
            name: {
                display: 'חוויותיו והרפתקאותיו של  שחקן כדורגל בחמש יבשות תבל באספקלריה אישית של אגון פולק - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672570772/library/%D7%97%D7%95%D7%95%D7%99%D7%95%D7%AA%D7%99%D7%95_%D7%95%D7%94%D7%A8%D7%A4%D7%AA%D7%A7%D7%90%D7%95%D7%AA%D7%99%D7%95_%D7%A9%D7%9C_%D7%A9%D7%97%D7%A7%D7%9F_%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C_%D7%91%D7%97%D7%9E%D7%A9_%D7%99%D7%91%D7%A9%D7%95%D7%AA_%D7%AA%D7%91%D7%9C_%D7%91%D7%90%D7%A1%D7%A4%D7%A7%D7%9C%D7%A8%D7%99%D7%94_%D7%90%D7%99%D7%A9%D7%99%D7%AA_%D7%A9%D7%9C_%D7%90%D7%92%D7%95%D7%9F_%D7%A4%D7%95%D7%9C%D7%A7_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_yuovxk.jpg',
            ctgIds: ['categoryId0007', 'categoryId0021', 'categoryId0022', 'categoryId0025', 'categoryId0036',]
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
        id: 'imageId00029',

        entityInfo: {
            name: {
                display: 'שייע גלזר - פרופיל'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571067/profile/%D7%A9%D7%99%D7%99%D7%A2_%D7%92%D7%9C%D7%96%D7%A8_-_%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C_nk1xt8.png',
            ctgIds: ['categoryId0007', 'categoryId0017', 'categoryId0037']
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
        id: 'imageId00030',

        entityInfo: {
            name: {
                display: 'החולצה מספר 9 - שייע גלזר - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571127/library/%D7%94%D7%97%D7%95%D7%9C%D7%A6%D7%94_%D7%9E%D7%A1%D7%A4%D7%A8_9_-_%D7%A9%D7%99%D7%99%D7%A2_%D7%92%D7%9C%D7%96%D7%A8-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_selvup.jpg',
            ctgIds: ['categoryId0007', 'categoryId0021', 'categoryId0022', 'categoryId0025', 'categoryId0037',]
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
        id: 'imageId00031',

        entityInfo: {
            name: {
                display: 'מאה שנים ראשונות - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571367/library/%D7%9E%D7%90%D7%94_%D7%A9%D7%A0%D7%99%D7%9D_%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%95%D7%AA_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_xzilcx.jpg',
            ctgIds: ['categoryId0021', 'categoryId0025']
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
        id: 'imageId00032',

        entityInfo: {
            name: {
                display: '102 שנים ראשונות - כריכה קדמית'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672571615/library/102_%D7%A9%D7%A0%D7%99%D7%9D_%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%95%D7%AA_-_%D7%9B%D7%A8%D7%99%D7%9B%D7%94_%D7%A7%D7%93%D7%9E%D7%99%D7%AA_dnpejw.jpg',
            ctgIds: ['categoryId0021', 'categoryId0025']
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
        id: 'imageId00033',

        entityInfo: {
            name: {
                display: 'חתימה של אבי נמני'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672584918/signature/signature_2_lodmji.png',
            ctgIds: ['categoryId0001', 'categoryId0007', 'categoryId0018']
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
        id: 'imageId00034',

        entityInfo: {
            name: {
                display: 'חתימה של עומר דבדה'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672585017/signature/signature_3_f9ggdu.png',
            ctgIds: ['categoryId0001', 'categoryId0010', 'categoryId0019']
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
        id: 'imageId00035',

        entityInfo: {
            name: {
                display: 'חתימה של אריאל כצנלסון'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672585154/signature/signature_4_zd54hc.png',
            ctgIds: ['categoryId0001', 'categoryId0009', 'categoryId0020']
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
        id: 'imageId00036',

        entityInfo: {
            name: {
                display: 'חתימה של אריאל כצנלסון'
            },
            imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672585183/signature/signature_5_olcscp.png',
            ctgIds: ['categoryId0001', 'categoryId0009', 'categoryId0020']
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