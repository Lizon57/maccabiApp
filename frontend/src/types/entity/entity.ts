import { IconType } from "react-icons"
import { EntityFilterOption } from "./filter/entity-filter-option"

import { EntitySortOption } from "./sort/entity-sort-option"
import { EntitySaveItemStage } from "./save/entity-save-item-stage"
import { EntityItem } from "./entities/entity-item"
import { EntityDetailsStructureCmp } from "../../models/combiners/entities/entity-details-structure-cmp"


export type Entity = {
    id: string

    name: string

    dbInfo: {
        name: string
        fallbackDB: EntityItem[]
    }

    entityInfo: {
        name: {
            display: string
            openGraph?: string
            listTitle: string
        },
        description: {
            short: string
            full: string
        },
        image: {
            thumbnail: {
                path: string
                title: string
            },
            imagePath: string
            icon: IconType
        }
    }

    detailsPageInfo: {
        type: string

        structure?: {
            head?: EntityDetailsStructureCmp[]
            additional?: EntityDetailsStructureCmp[]
        }
    }

    listPageInfo: {
        previewType: string
        sorts: EntitySortOption[]
        filters: EntityFilterOption[]
    }

    saveItemPage: {
        stages: EntitySaveItemStage[]
    }
}