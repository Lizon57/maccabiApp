import BEMHelper from "react-bem-helper"
import { APP_BRANCHES } from "../../../../data/supports-app-branch"
import { BranchChipPreview } from "./branch-chip-preview"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'branch-chip-list' })


export const BranchChipList = () => {

    return (
        <div {...BEM_HELPER('container')}>
            {APP_BRANCHES.map(branch => <BranchChipPreview branch={branch} key={branch._id} />)}
            <span className="description">סנן ענף</span>
        </div>
    )
}