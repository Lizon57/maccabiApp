import { ObjectId } from "mongodb"
import { EntityItemRate } from "../misc/entity-item-rate"
import { ActivityDuration } from "../../../common/activity-duration"


export type ExtendBranchInfo = {
    _id: ObjectId | string

    entityInfo: {
        item: {
            isActive?: boolean
            activityDurations?: ActivityDuration[]
            proximallyActivityDurations?: {
                start?: string | number
                end?: string | number
            }
        }
    }

    itemInfo: {
        view: number
        rate: EntityItemRate
        history: {
            totalEditCount: number
            lastEditDate: Date
        }
    }

    imagesIds?: string[]
    miniImages?: { id: string, name: string, imageUrl: string }[]

    isArchived?: boolean
}