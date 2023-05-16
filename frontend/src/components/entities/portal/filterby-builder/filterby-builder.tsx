import classNames from "classnames"

import { EntityFilterOption } from "../../../../models/interfaces/entities/entity-filter-option"

import { DynamicFilterby } from "./dynamic-filterby/dynamic-filterby"


export const FilterbyBuilder = ({ filters, debouncedSetIsLoading }: Props) => {
    filters = filters.filter(filter => filter.type !== 'primary_text')

    return (
        <div className={classNames('entity-portal--filterby-builder__container', { 'short-list': (filters.length < 4) })}>
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