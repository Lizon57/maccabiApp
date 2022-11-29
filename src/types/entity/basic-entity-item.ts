import { MiniPageCategory } from "../page-category"


export type BasicEntityItem = {
    id: string,

    relatedInfo?: {
        miniProfile?: {
            profileId: string,
            displayName: string,
            profileImageUrl: string
        },
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
        },
        editHistory: {
            total: number,
            lastEditDate: Date
        }
    }

    images?: string[],
    miniImages?: { id: string, name: string, imageUrl: string }[]
}