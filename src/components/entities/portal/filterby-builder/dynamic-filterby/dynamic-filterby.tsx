import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"
import { BranchMultiSelectFilterby } from "./branch-multi-select/branch-multi-select-filterby"

export const DynamicFilterby = ({ filter }: Props) => {
    switch (filter.type) {
        case 'branch_multi_select':
            return <BranchMultiSelectFilterby filter={filter} />

        default:
            return null
    }
}


type Props = {
    filter: EntityFilterOption
}