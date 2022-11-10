import { EntityFilterOption } from "../../types/entity/filter/entity-filter-option"
import { EntityItem } from "../../types/entity/entity-item"


const getEntityById = (items: EntityItem[], id: string) => {
    return items.find(item => item.id === id)
}


const filterEntityByTitle = (items: EntityItem[], pharse: string) => {
    return items.filter(item => item.entityInfo.name.display.includes(pharse))
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

    if (primaryFilter) {
        switch (primaryFilter.type) {
            case 'primary_text':
                const paramValue = PARAMS.get(primaryFilter.param)
                if (!paramValue) break
                const regex = new RegExp(paramValue, 'gi')
                filteredItems = filteredItems.filter(item => {
                    const opptionalValue = _getValueOfDynamicKey(item, primaryFilter.key)
                    return (regex.test(opptionalValue))
                })
        }
    }

    filters?.forEach((filter) => {
        switch (filter.type) {
            case 'branch_multi_select':
                const selectBranches = PARAMS.get(filter.param)?.split(',')
                if (!selectBranches?.length) break
                filteredItems = filteredItems.filter(item => {
                    let shouldFilterOut = true
                    const opptionalBranchesIds = _getValueOfDynamicKey(item, filter.key) as string[]
                    opptionalBranchesIds.forEach(branchId => {
                        if (selectBranches.includes(branchId)) shouldFilterOut = false
                    })

                    if (shouldFilterOut) return 0
                    else return 1
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
    getEntityById,
    filterEntityByTitle,
    getActiveFilters,
    dynamicEntityFilterByParams
}


type OptionalFilter = {
    primaryFilter?: EntityFilterOption | undefined,
    filters?: EntityFilterOption[] | undefined
}