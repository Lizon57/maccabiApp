import { getRandomInt } from "../../../services/util/get-random-int"
import { makeId } from "../../../services/util/make-id"

import { SignatureEntityItem } from "../../../types/entity/entities/signature-entity-item"


export const SIGNATURE_DB: SignatureEntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00001',
                displayName: 'מיקי ברקוביץ',
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
                profileId: 'profileId00002',
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
                profileId: 'profileId00003',
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
                profileId: 'profileId00004',
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
]