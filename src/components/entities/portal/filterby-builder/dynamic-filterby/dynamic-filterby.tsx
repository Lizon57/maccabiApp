import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"

import { BranchMultiSelectFilterby } from "./branch-multi-select/branch-multi-select-filterby"
import { NumberPicker } from "./range-picker/number-picker"


export const DynamicFilterby = ({ filter, debouncedSetIsLoading }: Props) => {
    switch (filter.type) {
        case 'branch_multi_select':
            return <BranchMultiSelectFilterby
                filter={filter}
                debouncedSetIsLoading={debouncedSetIsLoading}
            />

        case 'multi_number_picker':
            return <NumberPicker
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