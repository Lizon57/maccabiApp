import { ENTITIES_LIST } from "../../data/entities/entities-list"

import { asyncLocalStorageService } from "../async-local-storage-service"
import { sortEntityService } from "./sort-entity-service"

import { EntitySortParam } from "../../types/entity-sort-param"
import { EntityItem } from "../../types/entity-item"


const getEntityByName = (name: string) => {
    return ENTITIES_LIST.find(entity => entity.entityInfo.name.display === name)
}


const queryEntityItems = async (dbName: string, sortBy: EntitySortParam, fallbackDB: unknown[]) => {
    try {
        let items = await asyncLocalStorageService.query(dbName, fallbackDB) as EntityItem[]
        if (sortBy.sKey && sortBy.sOrder) items = sortEntityService.dynamicEntitySort(items, sortBy)
        return items
    }
    catch (_err) {
        console.log(_err)
    }
}


export const entityService = {
    getEntityByName,
    queryEntityItems
}