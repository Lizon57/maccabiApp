import { getRandomInt } from "../../../services/util/get-random-int"

import { ProfileEntityItem } from "../../../types/entity/entities/profile-item"



export const PROFILE_DB: ProfileEntityItem[] = [
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
]