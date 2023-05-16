import classNames from "classnames"
import { branchService } from "../../../services/app/branch-service"


export const DisplayBranchesIconByIds = ({ ids, className }: Props) => {
    const branches = branchService.getByIds(ids)
    const { asset: { symbol: primaryBranchSymbol }, name: { display: primaryBranchDisplayName } } = branches[0]
    const shouldRenderAdditionalBranchList = (branches.length >= 2)

    const formatter = new Intl.ListFormat('he', { style: 'long', type: 'conjunction' })
    const branchesNameList = formatter.format(branches.map(branch => branch.name.display))


    return (
        <div
            className={classNames('branch-icon--display-branch-icon-by-id', className)}
            title={`מתוך ${branchesNameList}`}
        >
            <img
                src={require(`../../../assets/images/branch-symbol/${primaryBranchSymbol}`)}
                alt={primaryBranchDisplayName}
            />

            {shouldRenderAdditionalBranchList && <span className="additional-branch">{branches.length - 1}</span>}
        </div>
    )
}


type Props = {
    ids: string[]
    className?: string
}