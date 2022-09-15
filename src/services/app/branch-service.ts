import { BRANCHES } from "../../data/app/supports-branches"

const getById = (id: string) => {
    return BRANCHES.filter(branch => branch._id === id)[0]
}


export const branchService = {
    getById,
}