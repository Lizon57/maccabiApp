import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"
import { setActiveBranchesIds } from "../../../../store/action/user-action"

import { User } from "../../../../models/interfaces/user/user"
import { BranchProp } from "../../../../types/branch"


export const BranchChipPreview = ({ branch }: BranchProp) => {
    const { user } = useSelector((state: RootState) => state.userStateModule)
    const { browseableBranchesIds } = user as User
    const isActiveBranch = browseableBranchesIds.includes(branch._id)


    const onBranchClick = () => {
        let activeBranchesIds = browseableBranchesIds.slice()
        if (isActiveBranch) {
            activeBranchesIds = activeBranchesIds.filter(branchId => branchId !== branch._id)
        }
        else activeBranchesIds.push(branch._id)

        setActiveBranchesIds(activeBranchesIds)
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