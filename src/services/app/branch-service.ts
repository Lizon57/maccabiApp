import { BRANCHES } from "../../data/app/supports-branches"
import { BranchType } from "../../types/branch"


const getById = (id: string) => {
    return BRANCHES.find(branch => branch._id === id)
}


const getByIds = (ids: string[]) => {
    const MAPPED_BRANCHES: BranchType[] = []
    ids.forEach(branchId => {
        const branch = BRANCHES.find(branch => branch._id === branchId)
        if (branch) MAPPED_BRANCHES.push(branch)
    })

    return MAPPED_BRANCHES
}


export const branchService = {
    getById,
    getByIds
}