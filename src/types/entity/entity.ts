import { IconType } from "react-icons"
import { EntityFilterOption } from "./filter/entity-filter-option"

import { EntitySortOption } from "./sort/entity-sort-option"
import { EntitySaveItemStage } from "./save/entity-save-item-stage"
import { EntityDetailsStuctureCmp } from "./details/entity-details-structure-cmp"
import { EntityItem } from "./entities/entity-item"


export type Entity = {
    id: string,

    name: string,

    dbInfo: {
        name: string,
        fallbackDB: EntityItem[]
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

    detailsPageInfo: {
        type: string,

        structure?: {
            head?: EntityDetailsStuctureCmp[],
            additional?: EntityDetailsStuctureCmp[]
        }
    },

    listPageInfo: {
        previewType: string,
        sorts: EntitySortOption[],
        filters: EntityFilterOption[]
    },

    saveItemPage: {
        stages: EntitySaveItemStage[]
    }
}