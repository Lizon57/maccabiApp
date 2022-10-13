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


const dynamicEntityFilterByParams = (items: EntityItem[], optionalFilter: OptionalFilter) => {
    const PARAMS = new URL(window.location.href).searchParams
    let filteredItems = items.slice()
    const { primaryFilter, filters } = optionalFilter


    filters?.forEach((filter) => {
        switch (filter.type) {
            case 'branch_multi_select':
                const selectBranches = PARAMS.get(filter.param)?.split(',')
                if (!selectBranches?.length) return
                filteredItems = filteredItems.filter(item => {
                    const opptionalValue = _getValueOfDynamicKey(item, filter.key)
                    if (selectBranches?.includes(opptionalValue)) return 1
                    else return 0
                })
        }
    })

    return filteredItems
}


const _getValueOfDynamicKey = <T>(item: { [key: string]: T }, dynamicKey: string) => {
    const KEY_PATH = dynamicKey.split('.')
    let actualValue: any = item

    for (let key of KEY_PATH) {
        actualValue = actualValue[key as any]
    }

    return actualValue
}


export const filterEntityService = {
    filterEntityByTitle,
    getActiveFilters,
    dynamicEntityFilterByParams
}


type OptionalFilter = {
    primaryFilter?: EntityFilterOption | undefined,
    filters?: EntityFilterOption[] | undefined
}