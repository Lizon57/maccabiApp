export type branchType = {
    _id: string,
    name: {
        chipFilter: string
    },
    asset: {
        symbol: string
    }
}

export type branchProp = {
    branch: branchType
}