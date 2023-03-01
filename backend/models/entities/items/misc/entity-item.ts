import { ObjectId } from "mongodb"
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
        rate: {
            avg?: number
            raterCount: number
            rateMap: {
                [key: string]: 1 | 2 | 3 | 4 | 5
            }
        },
        history: {
            totalEditCount: number
            lastEditDate: Date
        }
    }

    imagesIds?: string[]
    miniImages?: { id: string, name: string, imageUrl: string }[]

    isArchived?: boolean
}