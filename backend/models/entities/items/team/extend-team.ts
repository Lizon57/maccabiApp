import { ObjectId } from "mongodb"
import { EntityItemRate } from "../misc/entity-item-rate"
import { ActivityDuration } from "../../../common/activity-duration"


export type ExtendTeam = {
    _id: ObjectId | string

    entityInfo: {
        item: {
            isActive?: boolean
            activityDurations: ActivityDuration[]

            age?: {
                minimum?: number
                maximum?: number
            }
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