import { APP_BRANCHES } from "../../../../data/supports-app-branch"
import { BranchChipPreview } from "./branch-chip-preview"


export const BranchChipList = () => {
    return (
        <>
            <div className="app-header--branch-chip__list-title">סינון ענפים</div>
            <section className="app-header--branch-chip__list-container">
                {APP_BRANCHES.map(branch => <BranchChipPreview branch={branch} key={branch._id} />)}
                <span className="description">סנן ענף</span>
            </section>
        </>
    )
}