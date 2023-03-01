import { useState, useEffect } from "react"

import { EntityFilterOption } from "../../../../models/interfaces/entities/entity-filter-option"

import { ActiveFilterPreview } from "./active-filter-preview"


export const ActiveFilterList = ({ possibleFilters, searchParams, setIsLoading }: Props) => {
    const [activeFilters, setActiveFilters] = useState<EntityFilterOption[]>()

    useEffect(() => {
        const activeFilters = possibleFilters.filter(filter => searchParams.get(filter.param))
        setActiveFilters(activeFilters)
    }, [possibleFilters, searchParams])



    if (!activeFilters?.length) return <></>

    return (
        <div className="entities-portal--active-filter-list__container">
        <span className="title">סננים פעילים</span>
        <div className="list-container">
            {activeFilters.map(activeFilter => <ActiveFilterPreview
                key={activeFilter.id}
                filter={activeFilter}
                searchParams={searchParams}
                setIsLoading={setIsLoading}
            />)}
        </div>
    </div>
    )
}


type Props = {
    possibleFilters: EntityFilterOption[]
    searchParams: URLSearchParams
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}