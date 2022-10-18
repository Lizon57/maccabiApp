import { BsCamera } from "react-icons/bs"

import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { SIGNATURE_DB } from "../signature/signature-db"


export const imageEntity: Entity = {
    id: makeId(),

    name: 'image',

    dbInfo: {
        name: 'ImageDB',
        fallbackDB: SIGNATURE_DB
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
                path: 'mm-image.png',
                title: 'תמונות'
            },
            imagePath: 'images',
            icon: BsCamera
        }
    },

    listPageInfo: {
        previewType: 'square',

        sorts: [
        ],

        filters: [
        ]
    }
}