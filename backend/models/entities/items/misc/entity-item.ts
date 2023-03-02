import { ObjectId } from "mongodb"
import { EntityItemRate } from "./entity-item-rate"
import { MiniPageCategory } from "../page-category/mini-page-category"


export interface EntityItem {
    _id: ObjectId | string

    entityInfo: {
        name: {
            display: string
            he?: {
                private?: string
                middle?: string
                family?: string
                nickname?: string
            }
        }
        miniCategories?: MiniPageCategory[]
    }

    itemInfo: {
        view: number
        rate: EntityItemRate,
        history: {
            totalEditCount: number
            lastEditDate: Date
        }
    }

    imagesIds?: string[]
    miniImages?: { id: string, name: string, imageUrl: string }[]

    isArchived?: boolean
}