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
]