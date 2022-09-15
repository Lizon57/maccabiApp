import { branchService } from "../../../services/app/branch-service"

export const DisplayBranchIconById = ({ id, className }: propsType) => {
    const branch = branchService.getById(id)

    return (
        <img
            src={require(`../../../assets/images/branch-symbol/${branch.asset.symbol}`)}
            alt={branch.name.display}
            title={`כרזה למשחק ${branch.name.display}`}
            className={'branch-icon--Display-branch-icon-by-id ' + className}
        />
    )
}


type propsType = {
    id: string,
    className?: string
}