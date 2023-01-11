import { useState, useEffect } from "react"

import { BRANCHES } from "../../../../data/app/supports-branches"

import { filterEntityService } from "../../../../services/entities/filter-entity-service"

import { EntityFilterOption } from "../../../../types/entity/filter/entity-filter-option"

import { ActiveFilterPreview } from "./active-filter-preview"


export const ActiveFilterList = ({ possibleFiilters, setIsLoading }: Props) => {
    const [activeFilters, setActiveFilters] = useState<EntityFilterOption[]>()
    const { searchParams: params } = new URL(window.location.href)


    useEffect(() => {
        const activeFilters = filterEntityService.getActiveFilters(possibleFiilters) as EntityFilterOption[]
        setActiveFilters(activeFilters)
    }, [possibleFiilters])


    const shouldRender = (() => {
        if (!((activeFilters?.length === 1) && (activeFilters[0].key === 'relatedInfo.branchIds'))) return true
        
        const branchesFromParam = (params.get(activeFilters[0].param) || '').split(',')
        if (branchesFromParam.length === BRANCHES.length) return false
        return true
    })()

    
    if (!(activeFilters?.length)) return null
    if (!shouldRender) return null

    return (
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
    )
}


type Props = {
    possibleFiilters: EntityFilterOption[]
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}