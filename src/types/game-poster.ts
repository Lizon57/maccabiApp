export type gamePosterType = {
    id: string,

    relatedInfo: {
        branchId: string,
        opponentId?: string
    },

    entityInfo: {
        time: {
            timestamp?: number
        }
    },

    imgPath: string
}