import { EntityItem } from "../../types/entity/entities/entity-item"
import { EntitySortParam } from "../../types/entity/sort/entity-sort-param"

const dynamicEntitySort = (entityList: EntityItem[], sortBy: EntitySortParam) => {
    let sortedList = entityList.slice()
    switch (sortBy.sKey) {
        case 'entityInfo.name.display':
            sortedList = _sortEntityByStringKey(sortedList, sortBy)
            break

        case 'itemInfo.view':
        case 'itemInfo.rate.avg':
            sortedList = _sortEntityByNumberKey(sortedList, sortBy)
            break

        default:
            break
    }

    return sortedList
}


const _sortEntityByNumberKey = (entityList: EntityItem[], { sKey, sOrder }: EntitySortParam) => {
    if (!sKey) return entityList

    const sortKeyPath = sKey.split('.')
    entityList = entityList.slice()

    const getActualSortKeyValue = (item: EntityItem) => {
        let actualSortKeyValue: any = item

        for (let key of sortKeyPath) {
            actualSortKeyValue = actualSortKeyValue[key as any]
        }

        return actualSortKeyValue
    }

    entityList.sort((a, b) => {
        if (sOrder === 'asc') return getActualSortKeyValue(a) - getActualSortKeyValue(b)
        else return getActualSortKeyValue(b) - getActualSortKeyValue(a)
    })

    return entityList
}


const _sortEntityByStringKey = (entityList: EntityItem[], sortBy: EntitySortParam) => {
    // @ts-ignore
    if (!sortBy.sKey) return entityList

    const SORT_KEY_PATH = sortBy.sKey.split('.')
    entityList = entityList.slice()

    const getActualSortKeyValue = (item: EntityItem) => {
        let actualSortKeyValue: any = item

        for (let key of SORT_KEY_PATH) {
            actualSortKeyValue = actualSortKeyValue[key as any]
        }


        return actualSortKeyValue
    }

    entityList.sort((a, b) => {
        if (sortBy.sOrder === 'asc') {
            if (getActualSortKeyValue(b) < getActualSortKeyValue(a)) return 1
            else return 0
        } else {
            if (getActualSortKeyValue(a) < getActualSortKeyValue(b)) return 1
            else return 0
        }
    })

    return entityList
}


export const sortEntityService = {
    dynamicEntitySort
}