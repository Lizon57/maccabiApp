import { EntityItem } from "../misc/entity.item"


export type Library = EntityItem & {
    relatedInfo?: {
        profileImageId?: string
        miniProfile?: {
            profileId: string
            displayName: string
            profileImageUrl?: string
        },
        branchIds: string[]
    },

    entityInfo: {
        item?: {
            writers?: string[]
            publishers?: string[]
            pageCount?: number
            publishYear?: number
            isBiography?: boolean
            isTranslated?: boolean
        }
    }

    itemInfo: {
        view: number
        rate: {
            avg: number
            raterCount: number
        },
        editHistory: {
            total: number
            lastEditDate: Date
        }
    }
}