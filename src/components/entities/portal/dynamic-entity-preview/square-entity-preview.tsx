import { EntityItem } from "../../../../types/entity-item"

import { DisplayBranchIconById } from "../../../common/branch-icon/display-branch-icon-by-id"


export const SquareEntityPreview = ({ item }: Props) => {
    return (
        <div className="dynamic-entity-preview--square-entity-preview__container">
            <div className="title">
                <span className="branch-icon"><DisplayBranchIconById id={item.relatedInfo.branchId} /></span>
                <span className="title">{item.entityInfo.name.display}</span>
            </div>
        </div>
    )
}


type Props = {
    item: EntityItem
}