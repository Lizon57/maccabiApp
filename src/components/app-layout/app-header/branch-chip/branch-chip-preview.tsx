import { useState } from "react"
import { BranchProp } from "../../../../types/branch"


export const BranchChipPreview = ({ branch }: BranchProp) => {
    const [isActive, setIsActive] = useState(true)

    const { name: { display: displayName }, asset: { symbol } } = branch


    return (
        <div
            className={'app-header--branch-chip__preview-container' + (isActive ? ' active' : ' inactive')}
            onClick={() => setIsActive(!isActive)}
            title={`סנן ענף (${displayName})`}>
            <img src={require(`../../../../assets/images/branch-symbol/${symbol}`)} alt={displayName} className="symbol" />
            <span className="branch-name">{displayName}</span>
        </div>
    )
}