import { useState } from "react"
import BEMHelper from "react-bem-helper"
import { branchProp } from "../../../../types/branch"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'branch-chip-preview' })
const ACTIVE_BUTTON_BEM_HELPER = { ...BEM_HELPER('container', 'active') }


export const BranchChipPreview = ({ branch }: branchProp) => {
    const [isActive, setIsActive] = useState(true)

    const { name: { chipFilter: displayName }, asset: { symbol } } = branch


    return (
        <div {...isActive ? ACTIVE_BUTTON_BEM_HELPER : { ...BEM_HELPER('container') }} onClick={() => setIsActive(!isActive)} >
            <img src={require(`../../../../assets/images/branch-symbol/${symbol}`)} alt={displayName} className="symbol" />
            <button className="clear-botton">{displayName}</button>
        </div >
    )
}