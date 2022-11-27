import { getRandomInt } from "../../../services/util/get-random-int"
import { makeId } from "../../../services/util/make-id"

import { LibraryEntityItem } from "../../../types/entity/entities/library-entity-item"


export const LIBRARY_DB: LibraryEntityItem[] = [
    {
        id: makeId(),
        relatedInfo: {
            miniProfile: {
                profileId: 'profileId00001',
                displayName: 'מיקי ברקוביץ',
                profileImageUrl: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666785409/profile/%D7%9E%D7%99%D7%A7%D7%99_vo8kjw.jpg'
            },
            branchIds: ['branchId00002'],
        },

        entityInfo: {
            name: {
                display: 'נולד כדי לנצח'
            },
            ctgIds: ['categoryId0021', 'categoryId0022', 'categoryId0022']
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

]