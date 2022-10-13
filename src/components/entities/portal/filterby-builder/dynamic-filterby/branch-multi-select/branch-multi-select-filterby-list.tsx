import { useEffect, useState } from "react"
import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "../../../../../../hooks/use-debounce"

import { BRANCHES } from "../../../../../../data/app/supports-branches"

import { BranchMultiSelectFilterbyPreview } from "./branch-multi-select-filterby-preview"


export const BranchMultiSelectFilterbyList = ({ filterParam }: Props) => {
    const { user: { browseableBranchesIds } } = useStoreSelector(state => state.userModule)
    const [isActiveBranches, setIsActiveBranches] = useState(browseableBranchesIds)

    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()


    const getIsActiveBranch = (id: string) => !!isActiveBranches.find(branchId => branchId === id)

    const onBranchClick = (id: string) => {
        const isActive = getIsActiveBranch(id)

        let newActiveBranches = isActiveBranches.slice()
        if (isActive) {
            newActiveBranches = newActiveBranches.filter(branchId => branchId !== id)
        }
        else newActiveBranches.push(id)

        setIsActiveBranches(newActiveBranches)
        debouncedNavigateToNewActiveBranches(newActiveBranches)
    }

    const navigateToNewActiveBranches = (newActiveBranches: string[]) => {
        const initialFilterParam = newActiveBranches.join()
        PARAMS.set(filterParam, initialFilterParam)
        NAVIGATE({ search: PARAMS.toString().replaceAll('%2C', ',') })
    }
    const debouncedNavigateToNewActiveBranches = useDebounce(navigateToNewActiveBranches, 1000)


    useEffect(() => {
        if (PARAMS.get(filterParam)) {
            setIsActiveBranches(PARAMS.get(filterParam)?.split(',') || [])
        }
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
}