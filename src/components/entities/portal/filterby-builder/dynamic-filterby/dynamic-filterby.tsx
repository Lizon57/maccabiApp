import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"
import { MultiSelectFilterby } from "./multi-select-filterby"

export const DynamicFilterby = ({ filter }: Props) => {
    switch (filter.type) {
        case 'multi_select':
            return <MultiSelectFilterby filter={filter} />

        default:
            return null
    }
}


type Props = {
    filter: EntityFilterOption
}