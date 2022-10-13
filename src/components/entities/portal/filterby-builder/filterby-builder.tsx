import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"

import { DynamicFilterby } from "./dynamic-filterby/dynamic-filterby"


export const FilterbyBuilder = ({ filters, setIsLoading }: Props) => {
    filters = filters.filter(filter => filter.type !== 'primary_text')

    return (
        <div>
            {filters.map(filter => <DynamicFilterby key={filter.id} filter={filter} setIsLoading={setIsLoading} />)}
        </div>
    )
}


type Props = {
    filters: EntityFilterOption[],
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}