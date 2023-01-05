import { BranchType } from "../../../../../../types/branch"

export const BranchMultiSelectFilterbyPreview = ({ branch, isActive, toggleActiveBranch }: Props) => {
    const { _id, asset: { symbol }, name: { display: displayName } } = branch

    return (
        <div
            className={"entities-portal--branch-multi-select-filterby-preview__container" + (isActive ? ' active' : ' inactive')}
            onClick={() => toggleActiveBranch(_id)}>
            <img
                className="symbol"
                src={require(`../../../../../../assets/images/branch-symbol/${symbol}`)}
                alt="" />
            <span>{displayName}</span>
        </div>
    )
}

type Props = {
    branch: BranchType
    isActive: boolean
    toggleActiveBranch: (id: string) => void
}