export type CrowdOrganizationFilterby = {
    pageName?: string
    includeBranches?: string
    isActive?: string
    activityDuration?: {
        start?: {
            type: number
            date: string
        }
        end?: {
            type: number
            date: string
        }
    }
    isArchived?: string
}