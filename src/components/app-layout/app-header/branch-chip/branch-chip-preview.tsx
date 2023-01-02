import { useStoreDispatch } from "../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../hooks/store/use-store-selector"
import { setActiveBranchesIds } from "../../../../store/slicer/user-slicer"

import { BranchProp } from "../../../../types/branch"


export const BranchChipPreview = ({ branch }: BranchProp) => {
    const dispatch = useStoreDispatch()
    const { user } = useStoreSelector(state => state.userModule)

    const isActiveBranch = user.browseableBranchesIds.includes(branch._id)

    const onBranchClick = () => {
        let activeBranchesIds = user.browseableBranchesIds
        activeBranchesIds = activeBranchesIds.slice()
        if (isActiveBranch) {
            activeBranchesIds = activeBranchesIds.filter(branchId => branchId !== branch._id)
        }
        else activeBranchesIds.push(branch._id)

        dispatch(setActiveBranchesIds(activeBranchesIds))
    }


    const { name: { display: displayName }, asset: { symbol } } = branch

    return (
        <div
            className={'app-header--branch-chip__preview-container' + (isActiveBranch ? ' active' : ' inactive')}
            onClick={onBranchClick}
            title={`סנן ענף (${displayName})`}>
            <img src={require(`../../../../assets/images/branch-symbol/${symbol}`)} alt={displayName} className="symbol" />
            <span className="branch-name">{displayName}</span>
        </div>
    )
}