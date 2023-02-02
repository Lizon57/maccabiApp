import { BRANCHES } from "../../data/app/supports-branches"
import { BranchType } from "../../types/branch"


const getById = (id: string) => {
    return BRANCHES.find(({ _id }) => _id === id)
}


const getByIds = (ids: string[]) => {
    const mappedBranches: BranchType[] = []
    ids.forEach(branchId => {
        const branch = BRANCHES.find(({ _id }) => _id === branchId)
        if (branch) mappedBranches.push(branch)
    })

    return mappedBranches
}


export const branchService = {
    getById,
    getByIds
}