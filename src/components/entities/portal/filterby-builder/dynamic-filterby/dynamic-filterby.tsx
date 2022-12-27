import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"

import { BranchMultiSelectFilterby } from "./branch-multi-select/branch-multi-select-filterby"
import { CheckboxFilter } from "./checkbox-filter/checkbox-filter"
import { DateFilter } from "./date-filter/date-filter"
import { NumberFilter } from "./number-filter/number-filter"
import { TextFilter } from "./text-filter/text-filter"


export const DynamicFilterby = ({ filter, debouncedSetIsLoading }: Props) => {
    const basicProps = { filter, debouncedSetIsLoading }

    switch (filter.type) {
        case 'branch_multi_select':
            return <BranchMultiSelectFilterby {...basicProps} />

        case 'multi_number_filter':
            return <NumberFilter {...basicProps} />

        case 'text_filter':
            return <TextFilter {...basicProps} />

        case 'checkbox_filter':
            return <CheckboxFilter {...basicProps} />

        case 'date_filter':
            return <DateFilter {...basicProps} />

        default:
            return null
    }
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>

}