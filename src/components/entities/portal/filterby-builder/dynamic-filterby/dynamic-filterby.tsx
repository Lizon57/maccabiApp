import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"

import { BranchMultiSelectFilterby } from "./branch-multi-select/branch-multi-select-filterby"
import { MultiRangePicker } from "./multi-range-picker"


export const DynamicFilterby = ({ filter, debouncedSetIsLoading }: Props) => {
    switch (filter.type) {
        case 'branch_multi_select':
            return <BranchMultiSelectFilterby
                filter={filter}
                debouncedSetIsLoading={debouncedSetIsLoading}
            />

        case 'multi_range_picker':
            return <MultiRangePicker
                filter={filter}
                debouncedSetIsLoading={debouncedSetIsLoading}
            />

        default:
            return null
    }
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>

}