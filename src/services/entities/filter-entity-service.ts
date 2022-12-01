import { EntityFilterOption } from "../../types/entity/filter/entity-filter-option"
import { EntityItem } from "../../types/entity/entities/entity-item"


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
                    const optionalBranchesIds = _getValueOfDynamicKey(item, filter.key) as string[]
                    optionalBranchesIds.forEach(branchId => {
                        if (selectBranches.includes(branchId)) shouldFilterOut = false
                    })

                    if (shouldFilterOut) return 0
                    else return 1
                })
                break

            case 'multi_range_picker':
                const ranges = PARAMS.get(filter.param)?.split('|') || [-Infinity, Infinity]
                filteredItems = filteredItems.filter(item => {
                    const actualKeyValue = _getValueOfDynamicKey(item, filter.key)
                    if (filter.option?.isLengthProp) {
                        if (actualKeyValue.length < ranges[0] || actualKeyValue.length > ranges[1]) return false
                        else return true
                    }

                    if (actualKeyValue < ranges[0] || actualKeyValue > ranges[1]) return false
                    return true
                })
                break
        }
    })

    return filteredItems
}


const _getValueOfDynamicKey = (item: EntityItem, dynamicKey: string) => {
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