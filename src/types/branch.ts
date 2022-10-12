export type BranchType = {
    _id: string,
    name: {
        display: string
    },
    asset: {
        symbol: string
    }
}

export type BranchProp = {
    branch: BranchType
}