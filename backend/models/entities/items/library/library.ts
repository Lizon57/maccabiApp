import { EntityItem } from "../misc/entity-item"


export type Library = EntityItem & {
    relatedInfo?: {
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
}