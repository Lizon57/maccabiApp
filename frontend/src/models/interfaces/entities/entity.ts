import { IconType } from "react-icons/lib"
import { EntityFilterOption } from "./entity-filter-option"
import { EntitySaveItemStage } from "../../../types/entity/save/entity-save-item-stage"
import { EntitySortOption } from "../../../types/entity/sort/entity-sort-option"
import { EntityDetailsStructureCmp } from "../../combiners/entities/entity-details-structure-cmp"


export interface Entity {
    id: string
    name: string

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