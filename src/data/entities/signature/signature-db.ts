import { getRandomInt } from "../../../services/util/get-random-int"

import { EntityItem } from "../../../types/entity/entities/entity-item"


export const SIGNATURE_DB: EntityItem[] = [
    {
        id: 'signatureId00001',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00001',
                displayName: 'מיקי ברקוביץ\'',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%9E%D7%99%D7%A7%D7%99_vo8kjw.jpg'
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
                id: 'imageId00001',
                name: 'חתימה של מיקי ברקוביץ\'',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785525/signature/signature_1_h8yitn.png'
            }
        ]
    },

    {
        id: 'signatureId00002',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00002',
                displayName: 'אבי נמני',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%90%D7%91%D7%99_aalabt.jpg'
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
            view: 0,
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 40)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00032',
                name: 'חתימה של אבי נמני',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672584918/signature/signature_2_lodmji.png'
            }
        ]
    },

    {
        id: 'signatureId00003',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00003',
                displayName: 'עומר דבדה',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%A2%D7%95%D7%9E%D7%A8_o2neky.jpg'
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
            view: 0,
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 40)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00033',
                name: 'חתימה של עומר דבדה',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672585017/signature/signature_3_f9ggdu.png'
            },
        ]
    },

    {
        id: 'signatureId00004',
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00004',
                displayName: 'אריאל כצנלסון',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%90%D7%A8%D7%99%D7%90%D7%9C_uzyt25.jpg'
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
            view: 0,
            rate: {
                avg: getRandomInt(0, 5),
                raterCount: getRandomInt(0, 40)
            },
            editHistory: {
                total: getRandomInt(0, 20),
                lastEditDate: new Date()
            }
        },

        miniImages: [
            {
                id: 'imageId00034',
                name: 'חתימה של אריאל כצנלסון',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672585154/signature/signature_4_zd54hc.png'
            },
            {
                id: 'imageId00035',
                name: 'חתימה של אריאל כצנלסון',
                imageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672585183/signature/signature_5_olcscp.png'
            },
        ]
    },
]