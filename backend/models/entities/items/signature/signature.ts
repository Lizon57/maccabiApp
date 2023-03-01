import { EntityItem } from "../misc/entity-item"


export interface Signature extends EntityItem {
    relatedInfo: {
        miniProfile?: {
            profileId: string
            displayName: string
            profileImageUrl?: string
        },
        branchIds: string[]
    },
}