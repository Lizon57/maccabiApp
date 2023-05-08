import { ObjectId } from "mongodb"
import { EntityItemRate } from "../misc/entity-item-rate"
import { ActivityDuration } from "../../../common/activity-duration"


export type Branch = {
    _id: ObjectId | string

    relatedInfo?: {
        miniTeams: {
            id: string
            displayName: string
            icon: string
        }[]
    }

    entityInfo: {
        name: {
            display: string
            full?: string
        }

        item: {
            isActive?: boolean
            activityDurations: ActivityDuration[]
        }
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