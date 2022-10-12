import { EntityFilterOption } from "../../types/entity/filter/entity-filter-option"
import { EntityItem } from "../../types/entity/entity-item"


const filterEntityByTitle = (items: EntityItem[], searchTitle: string) => {
    return items.filter(item => item.entityInfo.name.display.includes(searchTitle))
}


const getActiveFilters = (possibleFilters: EntityFilterOption[]) => {
    const PARAMS = new URL(window.location.href).searchParams

    return possibleFilters.filter(possibleFilter => {
        if (PARAMS.get(possibleFilter.param)) return 1
        else return 0
    })
}


export const filterEntityService = {
    filterEntityByTitle,
    getActiveFilters
}