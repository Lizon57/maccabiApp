import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"

import { DynamicFilterby } from "./dynamic-filterby/dynamic-filterby"


export const FilterbyBuilder = ({ filters, debouncedSetIsLoading }: Props) => {
    filters = filters.filter(filter => filter.type !== 'primary_text')

    return (
        <div className="entity-portal--filterby-builder__container">
            {filters.map(filter => <DynamicFilterby
                key={filter.id}
                filter={filter}
                debouncedSetIsLoading={debouncedSetIsLoading}
            />)}
        </div>
    )
}


type Props = {
    filters: EntityFilterOption[]
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}