export type EntityItem = {
    id: string,

    relatedInfo: {
        branchId: string,
    },

    entityInfo: {
        name: {
            display: string
        }
    },

    itemInfo: {
        view: number,
        rate: {
            avg: number,
            raterCount: number
        }
        editHistory: {
            total: number,
            lastEditDate: Date
        }
    }

    images: string[]
}