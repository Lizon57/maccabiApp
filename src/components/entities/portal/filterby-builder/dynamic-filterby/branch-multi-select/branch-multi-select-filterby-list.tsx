import { useState } from "react"

import { BRANCHES } from "../../../../../../data/app/supports-branches"

import { BranchMultiSelectFilterbyPreview } from "./branch-multi-select-filterby-preview"


const IS_ACTIVE_BRANCH_MAP = BRANCHES.reduce((acc, branch) => {
    const { _id: branchId } = branch
    acc[branchId] = true
    return acc
}, {} as BranchesIsActiveMap)


export const BranchMultiSelectFilterbyList = () => {
    const [isActiveBranchMap, setIsActiveBranchMap] = useState(IS_ACTIVE_BRANCH_MAP)

    const getIsActiveBranch = (id: string) => isActiveBranchMap[id] ? true : false

    const toggleActiveBranch = (id: string) => {


        const newBranchState = !isActiveBranchMap[id]
        const newState = {
            ...isActiveBranchMap,
            [id]: newBranchState
        }
        setIsActiveBranchMap(newState)
    }


    return (
        <div className="entities-portal--branch-multi-select-list__container">
            {BRANCHES.map(branch => <BranchMultiSelectFilterbyPreview
                key={branch._id}
                branch={branch}
                isActive={getIsActiveBranch(branch._id)}
                toggleActiveBranch={toggleActiveBranch}
            />)}
        </div>
    )
}


type BranchesIsActiveMap = {
    [key: string]: boolean
}
