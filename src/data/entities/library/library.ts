import { makeId } from "../../../services/util/make-id"

import { Entity } from "../../../types/entity/entity"
import { LIBRARY_DB } from "./library-db"

import { RiBookOpenFill } from "react-icons/ri"


export const libraryEntity: Entity = {
    id: makeId(),

    name: 'library',

    dbInfo: {
        name: 'LibraryDB',
        fallbackDB: LIBRARY_DB
    },

    entityInfo: {
        name: {
            display: 'ספרייה',
            listTitle: 'ספרייה'
        },
        description: {
            short: 'מסיפור ההקמה ועד הביוגרפיה של ערן זהבי, מכבי בדפוס',
            full: 'כל המדיה המודפסת שנכתבה על מכבי, החל בסיפור הקמת האגודה ועד לביוגרפיות האחרונות'
        },
        image: {
            thumbnail: {
                path: 'cnc-book.png',
                title: 'ספרייה'
            },
            imagePath: 'library',
            icon: RiBookOpenFill
        }
    },

    detailsPageInfo: {
        type: 'article',
    },

    listPageInfo: {
        previewType: 'square',

        sorts: [
        ],

        filters: [
        ]
    },

    saveItemPage: {
        stages: [
        ]
    }
}