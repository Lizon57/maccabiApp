import { IMAGE_DB } from "../../data/entities/image/image-db"
import { PROFILE_DB } from "../../data/entities/profile/profile-db"
import { EntityItem } from "../../types/entity/entities/entity-item"

import { ImageEntityItem } from "../../types/entity/entities/image-entity-item"
import { ProfileEntityItem } from "../../types/entity/entities/profile-item"

import { entityService } from "./entity-service"
import { filterEntityService } from "./filter-entity-service"
import { asyncLocalStorageService } from "../async-local-storage-service"
import { makeId } from "../util/make-id"



const getMiniProfileById = async (id: string = '') => {
    try {
        let items = await entityService.queryEntityItems('ProfileDB', {}, {}, PROFILE_DB) as ProfileEntityItem[] || []
        const item = filterEntityService.getEntityById(items, id) as ProfileEntityItem
        if (!item) return
        const images = await entityService.queryEntityItems('ImageDB', {}, {}, IMAGE_DB) as ImageEntityItem[] || []

        const miniProfile = {
            id: item.id,
            name: item.entityInfo.name.display,
            branchIds: item.relatedInfo?.branchIds || [],
            profileImageUrl: images.find(image => image.id === item.relatedInfo.profileImageId)?.entityInfo.imageUrl
        }

        return miniProfile
    } catch (err) {
        console.log(err)
    }
}


const getMiniProfilesByPharse = async (pharse: string = '') => {
    try {
        let items = await entityService.queryEntityItems('ProfileDB', {}, {}, PROFILE_DB) as ProfileEntityItem[] || []
        items = filterEntityService.filterEntityByTitle(items, pharse) as ProfileEntityItem[]
        const images = await entityService.queryEntityItems('ImageDB', {}, {}, IMAGE_DB) as ImageEntityItem[] || []
        if (!items) return []

        const availableOptions = items.map(item => ({
            id: item.id,
            name: item.entityInfo.name.display,
            branchIds: item.relatedInfo?.branchIds || [],
            profileImageUrl: images.find(image => image.id === item.relatedInfo.profileImageId)?.entityInfo.imageUrl
        }))

        return availableOptions
    } catch (err) {
        console.log(err)
        return []
    }
}


const save = async (item: EntityItem, dbName: string, fallBackDB: unknown[]) => {
    if (!item.id) item.id = makeId()
    const savedItem = asyncLocalStorageService.save(item, dbName, fallBackDB)
    return savedItem
}


export const entityItemService = {
    getMiniProfileById,
    getMiniProfilesByPharse,
    save
}
