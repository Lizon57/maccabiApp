import { gamePosterType } from "../../types/game-poster"

const dynamicEntitySort = (entityList: gamePosterType[], sortBy: sortType) => {
    const { sKey, sOrder } = sortBy
    let sortedList = entityList.slice()
    switch (sKey) {

        case 'createdAt':
            _sortEntityByCreatedTime(sortedList, sOrder)
            break

        case 'view':
            _sortEntityByView(sortedList, sOrder)
            break

        default:
            break
    }

    return sortedList
}


const _sortEntityByCreatedTime = (entityList: gamePosterType[], sortMethod: string) => {
    entityList.sort((a, b) => {
        const isALowerThanB = (a.entityInfo?.time?.timestamp || 0) < (b.entityInfo?.time?.timestamp || 0)

        if (sortMethod === 'asc') return isALowerThanB ? 1 : 0
        else return isALowerThanB ? 0 : 1
    })
}


const _sortEntityByView = (entityList: gamePosterType[], sortMethod: string) => {
    entityList.sort((a, b) => {
        const isALowerThanB = (a.entityInfo?.view || 0) < (b.entityInfo?.view || 0)

        if (sortMethod === 'asc') return isALowerThanB ? 1 : 0
        else return isALowerThanB ? 0 : 1
    })
}


export const sortEntityService = {
    dynamicEntitySort
}


type sortType = {
    sKey: string,
    sOrder: string
}