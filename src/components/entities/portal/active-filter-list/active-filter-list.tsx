import { useState, useEffect } from "react"

import { filterEntityService } from "../../../../services/entities/filter-entity-service"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"


export const ActiveFilterList = ({ possibleFiilters }: Props) => {
    const [activeFilters, setActiveFilters] = useState<EntityFilterOption[]>()

    useEffect(() => {
        const activeFilters = filterEntityService.getActiveFilters(possibleFiilters) as EntityFilterOption[]
        setActiveFilters(activeFilters)
    }, [possibleFiilters])


    return activeFilters?.length
        ? (
            <div>
                פילטרים פעילים: {activeFilters.map(activeFilter => <div>{JSON.stringify(activeFilter)}</div>)}
            </div>
        ) : null
}


type Props = {
    possibleFiilters: EntityFilterOption[]
}