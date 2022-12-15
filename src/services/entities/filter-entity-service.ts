import { EntityFilterOption } from "../../types/entity/filter/entity-filter-option"
import { EntityItem } from "../../types/entity/entities/entity-item"
import { getValueByDynamicKey } from "../util/get-value-by-dynamic-key"


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
                    const opptionalValue = getValueByDynamicKey(primaryFilter.key, item)
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
                    const optionalBranchesIds = getValueByDynamicKey(filter.key, item) as string[]
                    optionalBranchesIds.forEach(branchId => {
                        if (selectBranches.includes(branchId)) shouldFilterOut = false
                    })

                    if (shouldFilterOut) return 0
                    else return 1
                })
                break

            case 'multi_number_picker':
                const ranges = PARAMS.get(filter.param)?.split('|') || [-Infinity, Infinity]
                filteredItems = filteredItems.filter(item => {
                    const actualKeyValue = getValueByDynamicKey(filter.key, item)
                    if (filter.option?.isLengthProp) {
                        if (actualKeyValue.length < ranges[0] || actualKeyValue.length > ranges[1]) return false
                        else return true
                    }

                    if (actualKeyValue < ranges[0] || actualKeyValue > ranges[1]) return false
                    return true
                })
                break

            case 'text_filter':
                const type = PARAMS.get(filter.param + 'Type') || ''
                const term = PARAMS.get(filter.param) || ''
                if (!type || !term) break

                filteredItems = filteredItems.filter(item => {
                    const actualKeyValue = getValueByDynamicKey(filter.key, item)
                    if (!actualKeyValue) return false
                    if (type === '0') {
                        return actualKeyValue.some((str: string) => str.startsWith(term))
                    } else if (type === '1') {
                        return actualKeyValue.some((str: string) => str.endsWith(term))
                    } else if (type === '2') {
                        return actualKeyValue.some((str: string) => str.match(term))
                    }

                    return false
                })
                break
        }
    })

    return filteredItems
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