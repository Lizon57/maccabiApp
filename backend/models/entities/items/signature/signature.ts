import { EntityItem } from "../misc/entity.item"


export interface Signature extends EntityItem {
    relatedInfo?: {
        profileImageId?: string
        miniProfile?: {
            profileId: string
            displayName: string
            profileImageUrl?: string
        },
        branchIds: string[]
    },
}