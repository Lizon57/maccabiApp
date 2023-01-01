import { getRandomInt } from "../../../services/util/get-random-int"

import { EntityItem } from "../../../types/entity/entities/entity-item"



export const PROFILE_DB: EntityItem[] = [
    {
        id: 'profileId00001',
        relatedInfo: {
            profileImageId: 'imageId00003',
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'משה',
                    middle: 'מיכאל',
                    family: 'ברקוביץ\'',
                    nickname: 'מיקי',
                },
                display: 'מיקי ברקוביץ\''
            },

            lifetime: {
                born: {
                    date: new Date(17, 1, 1954),
                },

                bornLocation: {
                    city: 'כפר סבא',
                    country: 'ישראל'
                }
            },

            ctgIds: ['categoryId0012', 'categoryId0014']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00003', 'imageId00001'],
        miniImages: []
    },

    {
        id: 'profileId00002',
        relatedInfo: {
            profileImageId: 'imageId00002',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'אבי',
                    family: 'נמני',
                },
                display: 'אבי נמני'
            },

            lifetime: {
                born: {
                    date: new Date(26, 3, 1972),
                },

                bornLocation: {
                    city: 'חולון',
                    country: 'ישראל'
                }
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00002'],
        miniImages: []
    },

    {
        id: 'profileId00003',
        relatedInfo: {
            profileImageId: 'imageId00004',
            branchIds: ['branchId00004'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'עומר',
                    family: 'דבדה',
                },
                display: 'עומר דבדה'
            },

            ctgIds: ['categoryId0012', 'categoryId0016']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00004'],
        miniImages: []
    },

    {
        id: 'profileId00004',
        relatedInfo: {
            profileImageId: 'imageId00005',
            branchIds: ['branchId00003'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'אריאל',
                    family: 'כצנלסון',
                },
                display: 'אריאל כצנלסון'
            },

            ctgIds: ['categoryId0012', 'categoryId0015']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00005'],
        miniImages: []
    },

    {
        id: 'profileId00006',
        relatedInfo: {
            profileImageId: 'imageId00007',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'ערן',
                    family: 'זהבי',
                },
                display: 'ערן זהבי'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00007'],
        miniImages: []
    },

    {
        id: 'profileId00007',
        relatedInfo: {
            profileImageId: 'imageId00018',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'אבי',
                    family: 'כהן',
                },
                display: 'אבי כהן'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00018'],
        miniImages: []
    },

    {
        id: 'profileId00008',
        relatedInfo: {
            profileImageId: 'imageId00017',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'יוסף',
                    family: 'גולדשטיין',
                },
                display: 'יוסל\'ה גולדשטיין'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00017'],
        miniImages: []
    },

    {
        id: 'profileId00009',
        relatedInfo: {
            profileImageId: 'imageId00020',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'משה',
                    nickname: 'ג\'רי',
                    family: 'בית הלוי',
                },
                display: 'ג\'רי בית הלוי'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00020'],
        miniImages: []
    },

    {
        id: 'profileId00010',
        relatedInfo: {
            profileImageId: 'imageId00022',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'אלכסנדר',
                    nickname: 'שורה',
                    family: 'אובארוב',
                },
                display: 'שורה אובארוב'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00022'],
        miniImages: []
    },

    {
        id: 'profileId00011',
        relatedInfo: {
            profileImageId: 'imageId00024',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'אלי',
                    family: 'פוקס',
                },
                display: 'אלי פוקס'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00024'],
        miniImages: []
    },

    {
        id: 'profileId00012',
        relatedInfo: {
            profileImageId: 'imageId00026',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'אגון',
                    family: 'פולק',
                },
                display: 'אגון פולק'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00026'],
        miniImages: []
    },

    {
        id: 'profileId00013',
        relatedInfo: {
            profileImageId: 'imageId00028',
            branchIds: ['branchId00001'],
        },

        entityInfo: {
            name: {
                he: {
                    private: 'יהושע',
                    nickname: 'שייע',
                    family: 'גלזר',
                },
                display: 'שייע גלזר'
            },

            ctgIds: ['categoryId0012', 'categoryId0013']
        },

        itemInfo: {
            view: getRandomInt(0, 10),
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 10)
            },
            editHistory: {
                total: getRandomInt(0, 5),
                lastEditDate: new Date()
            }
        },

        images: ['imageId00028'],
        miniImages: []
    },
]