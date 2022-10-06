import { EntityItem } from "../../types/entity-item"
import { EntitySortParam } from "../../types/entity-sort-param"

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


const _sortEntityByNumberKey = <T>(entityList: { [key: number]: T }[], sortBy: EntitySortParam) => {
    const SORT_KEY_PATH = sortBy.sKey.split('.')
    entityList = entityList.slice()

    const getActualSortKeyValue = (item: { [key: number]: T }) => {
        let actualSortKeyValue: any = item

        for (let key of SORT_KEY_PATH) {
            actualSortKeyValue = actualSortKeyValue[key as any]
        }

        return actualSortKeyValue
    }

    entityList.sort((a, b) => {
        if (sortBy.sOrder === 'asc') return getActualSortKeyValue(a) - getActualSortKeyValue(b)
        else return getActualSortKeyValue(b) - getActualSortKeyValue(a)
    })

    return entityList as EntityItem[]
}


const _sortEntityByStringKey = <T>(entityList: { [key: string]: T }[], sortBy: EntitySortParam) => {
    const SORT_KEY_PATH = sortBy.sKey.split('.')
    entityList = entityList.slice()

    const getActualSortKeyValue = (item: { [key: string]: T }) => {
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

    return entityList as unknown as EntityItem[]
}


export const sortEntityService = {
    dynamicEntitySort
}