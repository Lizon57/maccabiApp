import { ENTITIES_LIST } from "../../data/entities/entities-list"

import { asyncLocalStorageService } from "../async-local-storage-service"
import { sortEntityService } from "./sort-entity-service"
import { pageCategoryService } from "../page-category-service"
import { filterEntityService } from "./filter-entity-service"

import { EntitySortParam } from "../../types/entity/sort/entity-sort-param"
import { EntityItem } from "../../types/entity/entity-item"
import { Entity } from "../../types/entity/entity"
import { PageCategory } from "../../types/page-category"
import { EntityFilterOption } from "../../types/entity/filter/entity-filter-option"


const getEntityByName = (name: string) => {
    return ENTITIES_LIST.find(entity => entity.name === name)
}


const queryEntityItems = async (dbName: string, sortBy: EntitySortParam, optionalFilter: OptionalFilter, fallbackDB: unknown[]) => {
    try {
        let items = await asyncLocalStorageService.query(dbName, fallbackDB) as EntityItem[]
        items = filterEntityService.dynamicEntityFilterByParams(items, optionalFilter)
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
            let miniCategoriesPrms = [] as Promise<PageCategory | undefined>[]
            item.entityInfo.ctgIds.forEach(categoryId => {
                const miniCategory = pageCategoryService.getById(categoryId)
                miniCategoriesPrms.push(miniCategory)
            })

            item.entityInfo.miniCategories = await Promise.all(miniCategoriesPrms) as PageCategory[]

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


type OptionalFilter = {
    primaryFilter?: EntityFilterOption | undefined,
    filters?: EntityFilterOption[] | undefined
}