import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { BRANCHES } from "../../../../../../data/app/supports-branches"

import { BranchMultiSelectFilterbyPreview } from "./branch-multi-select-filterby-preview"


export const BranchMultiSelectFilterbyList = ({ filterParam, debouncedSetIsLoading }: Props) => {
    const { browseableBranchesIds } = useSelector((state: RootState) => state.userStateModule.user)
    const { searchParams: params } = new URL(window.location.href)
    const branchesFromParams = (params.get(filterParam)?.split(',') || [])
    const initialBranchesIdsState = (branchesFromParams.length) ? branchesFromParams : browseableBranchesIds
    const [activeBranchesIds, setActiveBranchesIds] = useState<string[]>(initialBranchesIdsState)

    const navigate = useNavigate()


    const navigateToNewActiveBranches = (newActiveBranches: string[]) => {
        const newActiveBranchesForParam = newActiveBranches.join()
        params.set(filterParam, newActiveBranchesForParam)
        navigate({ search: params.toString().replaceAll('%2C', ',') })
    }
    const debouncedNavigateToNewActiveBranches = useDebouncedCallback(navigateToNewActiveBranches, 1000)


    useEffect(() => {
        setActiveBranchesIds(browseableBranchesIds)
    }, [browseableBranchesIds])

    useEffect(() => {
        if ((browseableBranchesIds.join('') !== branchesFromParams.join('')) && branchesFromParams.length) {
            setActiveBranchesIds(branchesFromParams)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    const activeNewBranchesIds = (branchesIds: string[]) => {
        setActiveBranchesIds(branchesIds)
        debouncedNavigateToNewActiveBranches(branchesIds)
        debouncedSetIsLoading(true)
    }


    const onBranchClick = (branchId: string) => {
        const getIsActiveBranch = !!activeBranchesIds.find(activeBranchId => activeBranchId === branchId)
        let newActiveBranchesIds = activeBranchesIds.slice()

        if (getIsActiveBranch) newActiveBranchesIds = newActiveBranchesIds.filter(activeBranchId => activeBranchId !== branchId)
        else newActiveBranchesIds.push(branchId)

        activeNewBranchesIds(newActiveBranchesIds)
    }


    return (
        <div className="entities-portal--branch-multi-select-list__container">
            {BRANCHES.map(branch => <BranchMultiSelectFilterbyPreview
                key={branch._id}
                branch={branch}
                isActive={activeBranchesIds.includes(branch._id)}
                toggleActiveBranch={() => onBranchClick(branch._id)}
            />)}
        </div>
    )
}


type Props = {
    filterParam: string
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}