import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"

import { BranchMultiSelectFilterbyList } from "./branch-multi-select-filterby-list"


export const BranchMultiSelectFilterby = ({ filter }: Props) => {
    return (
        <div className="entities-portal--branch-multi-select-filterby__container">
            <span className="title">{filter.title}</span>
            <BranchMultiSelectFilterbyList />
        </div>
    )
}


type Props = {
    filter: EntityFilterOption
}