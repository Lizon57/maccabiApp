import { IMAGE_DB } from "../../data/entities/image/image-db"
import { PROFILE_DB } from "../../data/entities/profile/profile-db"
import { ImageEntityItem } from "../../types/entity/entities/image-entity-item"
import { ProfileEntityItem } from "../../types/entity/entities/profile-item"

import { makeId } from "../util/make-id"

import { entityService } from "./entity-service"
import { filterEntityService } from "./filter-entity-service"


const getEmptyEntityItem = () => {
    return {
        id: makeId(),

        entityInfo: {
            name: {
                display: ''
            },
            ctgIds: [],
        },

        itemInfo: {
            view: 0,
            rate: {
                avg: 0,
                raterCount: 0
            },
            editHistory: {
                total: 0,
                lastEditDate: new Date()
            }
        }
    }
}


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


export const entityItemService = {
    getEmptyEntityItem,
    getMiniProfileById,
    getMiniProfilesByPharse
}
