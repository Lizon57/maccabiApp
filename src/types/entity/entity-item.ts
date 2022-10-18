import { MiniPageCategory } from "../page-category"


export type EntityItem = {
    id: string,

    relatedInfo?: {
        branchIds: string[],
    },

    entityInfo: {
        name: {
            display: string
        },
        ctgIds: string[],
        miniCategories?: MiniPageCategory[]
    },

    itemInfo: {
        view: number,
        rate: {
            avg: number,
            raterCount: number
        }
        editHistory: {
            total: number,
            lastEditDate: Date
        }
    }

    images?: string[]
}