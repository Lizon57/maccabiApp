export interface AbstractTeam {
    relatedInfo: {
        extendTeamId: string

        miniBranch: {
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

        symbolUrl: string
    }
}