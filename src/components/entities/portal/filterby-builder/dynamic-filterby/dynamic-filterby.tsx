import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"

import { BranchMultiSelectFilterby } from "./branch-multi-select/branch-multi-select-filterby"
import { CheckboxFilter } from "./checkbox-filter/checkbox-filter"
import { NumberPicker } from "./number-picker/number-picker"
import { TextFilter } from "./text-filter/text-filter"


export const DynamicFilterby = ({ filter, debouncedSetIsLoading }: Props) => {
    const basicProps = { filter, debouncedSetIsLoading }

    switch (filter.type) {
        case 'branch_multi_select':
            return <BranchMultiSelectFilterby {...basicProps} />

        case 'multi_number_picker':
            return <NumberPicker {...basicProps} />

        case 'text_filter':
            return <TextFilter {...basicProps} />

        case 'checkbox_filter':
            return <CheckboxFilter {...basicProps} />

        default:
            return null
    }
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>

}