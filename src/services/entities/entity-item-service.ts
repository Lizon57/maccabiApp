import { IMAGE_DB } from "../../data/entities/image/image-db"
import { PROFILE_DB } from "../../data/entities/profile/profile-db"

import { EntityItem } from "../../types/entity/entities/entity-item"
import { Entity } from "../../types/entity/entity"

import { entityService } from "./entity-service"
import { filterEntityService } from "./filter-entity-service"
import { asyncLocalStorageService } from "../async-local-storage-service"

import { makeId } from "../util/make-id"



const getMiniProfileById = async (id: string = '') => {
    try {
        let items = await entityService.queryEntityItems('ProfileDB', {}, {}, PROFILE_DB) as EntityItem[] || []
        const item = filterEntityService.getEntityById(items, id) as EntityItem
        if (!item) return
        const images = await entityService.queryEntityItems('ImageDB', {}, {}, IMAGE_DB) as EntityItem[] || []

        const miniProfile = {
            id: item.id,
            name: item.entityInfo.name.display,
            branchIds: item.relatedInfo?.branchIds || [],
            profileImageUrl: images.find(image => image.id === item.relatedInfo?.profileImageId)?.entityInfo.imageUrl
        }

        return miniProfile
    } catch (err) {
        console.log(err)
    }
}


const getMiniProfilesByPharse = async (pharse: string = '') => {
    try {
        let items = await entityService.queryEntityItems('ProfileDB', {}, {}, PROFILE_DB) as EntityItem[] || []
        items = filterEntityService.filterEntityByTitle(items, pharse) as EntityItem[]
        const images = await entityService.queryEntityItems('ImageDB', {}, {}, IMAGE_DB) as EntityItem[] || []
        if (!items) return []

        const availableOptions = items.map(({ id, entityInfo, relatedInfo }) => ({
            id: id,
            name: entityInfo.name.display,
            branchIds: relatedInfo?.branchIds || [],
            profileImageUrl: images.find(({ id }) => id === relatedInfo?.profileImageId)?.entityInfo.imageUrl
        }))

        return availableOptions
    } catch (err) {
        console.log(err)
        return []
    }
}


const save = async (item: EntityItem, dbName: string, fallBackDB: unknown[]) => {
    if (!item.id) item.id = makeId()

    const savedItem = await asyncLocalStorageService.replaceEntityItem(item, dbName, fallBackDB as EntityItem[])
    return savedItem
}


const remove = async (itemId: string, entity: Entity, dbName: string, fallBackDB: unknown[]) => {
    try {
        let item = await entityService.getEntityItemById(itemId, entity)
        if (!item) throw new Error('Couldn\'t find entity item to remove')
        Object.assign(item, { isArchived: true })
        await asyncLocalStorageService.save(item, dbName, fallBackDB)
    } catch (err) {
        console.log(err)
    }
}


export const entityItemService = {
    getMiniProfileById,
    getMiniProfilesByPharse,
    save,
    remove
}
