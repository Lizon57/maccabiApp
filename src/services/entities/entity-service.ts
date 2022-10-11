import { ENTITIES_LIST } from "../../data/entities/entities-list"

import { asyncLocalStorageService } from "../async-local-storage-service"
import { sortEntityService } from "./sort-entity-service"
import { filterEntityService } from "./filter-entity-service"

import { EntitySortParam } from "../../types/entity/sort/entity-sort-param"
import { EntityItem } from "../../types/entity/entity-item"
import { Entity } from "../../types/entity/entity"
import { pageCategoryService } from "../page-category-service"
import { MiniPageCategory } from "../../types/page-category"


const getEntityByName = (name: string) => {
    return ENTITIES_LIST.find(entity => entity.name === name)
}


const queryEntityItems = async (dbName: string, sortBy: EntitySortParam, searchTitle: string, fallbackDB: unknown[]) => {
    try {
        let items = await asyncLocalStorageService.query(dbName, fallbackDB) as EntityItem[]
        if (searchTitle) items = filterEntityService.filterEntityByTitle(items, searchTitle)
        if (sortBy.sKey && sortBy.sOrder) items = sortEntityService.dynamicEntitySort(items, sortBy)
        return items
    }
    catch (_err) {
        console.log(_err)
    }
}


const getEntityItemById = async (id: string, entity: Entity) => {
    try {
        const entityDB = await asyncLocalStorageService.query(entity.dbInfo.name, entity.dbInfo.fallbackDB) as EntityItem[]
        const item = entityDB.find(entity => entity.id === id)
        if (!item) return Promise.reject('לא נמצא פריט מבוקש')

        if (item.entityInfo.ctgIds) {
            item.entityInfo.miniCategories = [] as MiniPageCategory[]
            item.entityInfo.ctgIds.forEach(async categoryId => {
                const miniCategory = await pageCategoryService.getById(categoryId) as MiniPageCategory
                item.entityInfo.miniCategories?.push(miniCategory)
            })
        }
        return item
    }
    catch (_err) {
        console.log(_err)
    }
}


export const entityService = {
    getEntityByName,
    queryEntityItems,
    getEntityItemById
}