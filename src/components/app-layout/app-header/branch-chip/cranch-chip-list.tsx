import { APP_BRANCHES } from "../../../../data/supports-app-branch"

export const BranchChipList = () => {
    return (
        <div>
            {APP_BRANCHES.map(branch => <div>{branch.name.chipFilter}</div>)}
        </div>
    )
}