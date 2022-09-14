export type gamePosterType = {
    id: string,

    relatedInfo?: {
        opponentId: string
    },

    entityInfo: {
        time: {
            timestamp?: number
        }
    },

    imgPath: string
}