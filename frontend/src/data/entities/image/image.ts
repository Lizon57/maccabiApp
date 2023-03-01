import { BsCamera } from "react-icons/bs"
import { Entity } from "../../../models/interfaces/entities/entity"
import { makeId } from "../../../services/util/make-id"


export const imageEntity: Entity = {
    id: makeId(),

    name: 'image',

    entityInfo: {
        name: {
            display: 'תמונות',
            openGraph: 'כל התמונות של מכבי תל אביב',
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