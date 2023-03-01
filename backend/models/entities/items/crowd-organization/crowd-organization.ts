import { EntityItem } from "../misc/entity-item"
import { ActivityDuration } from "../../../common/activity-duration"


export type CrowdOrganization = EntityItem & {
    relatedInfo?: {
        branchIds: string[]
    }

    entityInfo: {
        item: {
            isActive?: boolean
            activityDurations: ActivityDuration[]
        }
    }
}