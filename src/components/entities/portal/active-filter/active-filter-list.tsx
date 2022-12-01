import { useState, useEffect } from "react"

import { filterEntityService } from "../../../../services/entities/filter-entity-service"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"

import { ActiveFilterPreview } from "./active-filter-preview"


export const ActiveFilterList = ({ possibleFiilters, setIsLoading }: Props) => {
    const [activeFilters, setActiveFilters] = useState<EntityFilterOption[]>()

    useEffect(() => {
        const activeFilters = filterEntityService.getActiveFilters(possibleFiilters) as EntityFilterOption[]
        setActiveFilters(activeFilters)
    }, [possibleFiilters])


    return activeFilters?.length
        ? (
            <div className="entities-portal--active-filter-list__container">
                <span className="title">סננים פעילים</span>
                <div className="list-container">
                    {activeFilters.map(activeFilter => <ActiveFilterPreview
                        key={activeFilter.id}
                        filter={activeFilter}
                        setIsLoading={setIsLoading}
                    />)}
                </div>
            </div>
        ) : null
}


type Props = {
    possibleFiilters: EntityFilterOption[],
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}