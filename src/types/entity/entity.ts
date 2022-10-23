import { IconType } from "react-icons"
import { EntityFilterOption } from "./filter/entity-filter-option"

import { EntitySortOption } from "./sort/entity-sort-option"
import { SignatureEntityItem } from "./entities/signature-entity-item"
import { EntityAddItemStage } from "./add/entity-add-item-stage"


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
        sorts: EntitySortOption[],
        filters: EntityFilterOption[]
    },

    addItemPage: {
        stages: EntityAddItemStage[]
    }
}