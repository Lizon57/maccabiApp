import { branchService } from "../../../services/app/branch-service"


export const DisplayBranchesIconByIds = ({ ids, className }: Props) => {
    const BRANCHES = branchService.getByIds(ids)
    const primaryBranch = BRANCHES[0]
    const shouldRenderAdditionalBranchList = (BRANCHES.length >= 2 ? true : false)

    const formatter = new Intl.ListFormat('he', { style: 'long', type: 'conjunction' })
    const branchesNameList = formatter.format(BRANCHES.map(branch => branch.name.display))


    return (
        <div
            className={'branch-icon--Display-branch-icon-by-id ' + className}
            title={`מתוך ${branchesNameList}`}>
            <img
                src={require(`../../../assets/images/branch-symbol/${primaryBranch.asset.symbol}`)}
                alt={primaryBranch.name.display}
            />

            {shouldRenderAdditionalBranchList && <span className="additional-branch">{BRANCHES.length - 1}</span>}
        </div>
    )
}


type Props = {
    ids: string[],
    className?: string
}