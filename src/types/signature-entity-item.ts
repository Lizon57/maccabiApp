import { EntityItem } from "./entity-item"

export type SignatureEntityItem = SignatureItem & EntityItem


interface SignatureItem {
    relatedInfo: {
        miniProfile: {
            profileId?: string
            displayName: string,
        }
    },

    images: string[]
}