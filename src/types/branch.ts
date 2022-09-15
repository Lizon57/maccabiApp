export type branchType = {
    _id: string,
    name: {
        display: string
    },
    asset: {
        symbol: string
    }
}

export type branchProp = {
    branch: branchType
}