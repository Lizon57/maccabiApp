import { BranchType } from "../../../../../../types/branch"

export const BranchMultiSelectFilterbyPreview = ({ branch, isActive, toggleActiveBranch }: Props) => {
    return (
        <div
            className={"entities-portal--branch-multi-select-filterby-preview__container" + (isActive ? ' active' : ' inactive')}
            onClick={() => toggleActiveBranch(branch._id)}>
            <img
                className="symbol"
                src={require(`../../../../../../assets/images/branch-symbol/${branch.asset.symbol}`)}
                alt="" />
            <span>{branch.name.display}</span>
        </div>
    )
}

type Props = {
    branch: BranchType
    isActive: boolean
    toggleActiveBranch: (id: string) => void
}