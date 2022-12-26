import { BsCamera } from "react-icons/bs"

import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { IMAGE_DB } from "./image-db"


export const imageEntity: Entity = {
    id: makeId(),

    name: 'image',

    dbInfo: {
        name: 'ImageDB',
        fallbackDB: IMAGE_DB
    },

    entityInfo: {
        name: {
            display: 'תמונות',
            listTitle: 'תמונות'
        },
        description: {
            short: '',
            full: ''
        },
        image: {
            thumbnail: {
                path: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1672041587/entity-default/mm-image_e3s8ef.png',
                title: 'תמונות'
            },
            imagePath: 'images',
            icon: BsCamera
        }
    },

    detailsPageInfo: {
        type: 'media',
    },

    listPageInfo: {
        previewType: 'square',

        sorts: [
        ],

        filters: [
        ]
    },

    saveItemPage: {
        stages: [{ title: 'העלאת תמונות', type: 'photo-uploader', isRequire: true }]
    }
}