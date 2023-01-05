import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { useDebounce } from "../../../../../../hooks/use-debounce"

import { BRANCHES } from "../../../../../../data/app/supports-branches"

import { BranchMultiSelectFilterbyPreview } from "./branch-multi-select-filterby-preview"


export const BranchMultiSelectFilterbyList = ({ filterParam, debouncedSetIsLoading }: Props) => {
    const { browseableBranchesIds } = useStoreSelector(state => state.userModule.user)
    const [isActiveBranches, setIsActiveBranches] = useState(browseableBranchesIds)

    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()


    const getIsActiveBranch = (id: string) => !!isActiveBranches.find(branchId => branchId === id)

    const onBranchClick = (id: string) => {
        const isActive = getIsActiveBranch(id)

        let newActiveBranches = isActiveBranches.slice()
        if (isActive) newActiveBranches = newActiveBranches.filter(branchId => branchId !== id)
        else newActiveBranches.push(id)

        setIsActiveBranches(newActiveBranches)
        debouncedNavigateToNewActiveBranches(newActiveBranches)
        debouncedSetIsLoading(true)
    }

    const navigateToNewActiveBranches = (newActiveBranches: string[]) => {
        const initialFilterParam = newActiveBranches.join()
        params.set(filterParam, initialFilterParam)
        navigate({ search: params.toString().replaceAll('%2C', ',') })
    }
    const debouncedNavigateToNewActiveBranches = useDebounce(navigateToNewActiveBranches, 1000)


    useEffect(() => {
        if (params.get(filterParam)) setIsActiveBranches(params.get(filterParam)?.split(',') || [])
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="entities-portal--branch-multi-select-list__container">
            {BRANCHES.map(branch => <BranchMultiSelectFilterbyPreview
                key={branch._id}
                branch={branch}
                isActive={getIsActiveBranch(branch._id)}
                toggleActiveBranch={onBranchClick}
            />)}
        </div>
    )
}


type Props = {
    filterParam: string
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}