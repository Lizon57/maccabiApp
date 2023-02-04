import { ObjectId } from "mongodb"
import { UncompleteDate } from "../../../common/uncomplete.date"
import { ActivityDuration } from "../../../common/activity.duration"
import { EntityItem } from "../misc/entity.item"


export type Profile = EntityItem & {
    relatedInfo?: {
        profileImageId?: ObjectId
        branchIds: string[]
    }

    entityInfo: {
        item?: {
            dateOfActivity?: {
                isActive?: boolean
                activityDurations: ActivityDuration[]
            }
        }
        lifetime?: {
            born?: {
                date?: Date
                uncomplete?: UncompleteDate
                location: {
                    city?: string
                    region?: string
                    country?: string
                }
            }
            died?: {
                date?: Date
                uncomplete?: UncompleteDate
            }
        }
    }
}