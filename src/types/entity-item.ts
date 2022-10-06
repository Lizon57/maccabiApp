export type EntityItem = {
    id: string,

    relatedInfo: {
        branchId: string,
    },

    entityInfo: {
        name: {
            display: string
        }
        view: number
    },

    images: string[]
}