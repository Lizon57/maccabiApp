import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"

import { DynamicFilterby } from "./dynamic-filterby/dynamic-filterby"


export const FilterbyBuilder = ({ filters }: Props) => {
    filters = filters.filter(filter => filter.type !== 'primary_text')

    return (
        <div>
            {filters.map(filter => <DynamicFilterby key={filter.id} filter={filter} />)}
        </div>
    )
}


type Props = {
    filters: EntityFilterOption[]
}