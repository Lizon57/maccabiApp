import { EntityItem } from "../entity-item"

export type SignatureEntityItem = _SignatureItem & EntityItem


interface _SignatureItem {
    relatedInfo: {
        miniProfile: {
            profileId?: string,
            displayName: string,
        }
    },

    miniImages: { id: string, name: string, imageUrl: string }[]
}