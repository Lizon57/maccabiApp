import { BRANCHES } from "../../data/app/supports-branches"

const getById = (id: string) => {
    return BRANCHES.find(branch => branch._id === id)
}


export const branchService = {
    getById,
}