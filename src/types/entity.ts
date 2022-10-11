import { IconType } from "react-icons"

import { EntitySortOption } from "./entity-sort-option"
import { SignatureEntityItem } from "./signature-entity-item"


export type Entity = {
    id: string,

    name: string,

    dbInfo: {
        name: string,
        fallbackDB: SignatureEntityItem[]
    },

    entityInfo: {
        name: {
            display: string,
            listTitle: string
        },
        description: {
            short: string,
            full: string
        },
        image: {
            thumbnail: {
                path: string,
                title: string
            },
            imagePath: string,
            icon: IconType
        }
    },

    listPageInfo: {
        previewType: string,
        sorts: EntitySortOption[]
    }
}