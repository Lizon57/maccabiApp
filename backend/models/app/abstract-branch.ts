export interface AbstractBranch {
    relatedInfo: {
        extendBranchId: string

        mainTeamId: string
        miniTeams: {
            id: string
            displayName: string
            symbol: string
        }[]
    }

    entityInfo: {
        name: {
            display: string
            full?: string
        }
    }
}
