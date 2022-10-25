import { PROFILE_DB } from "../../data/entities/profile/profile-db"

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


const getMiniProfilesByPharse = async (pharse: string = '') => {
    try {
        let items = await entityService.queryEntityItems('ProfileDB', {}, {}, PROFILE_DB) || []
        items = filterEntityService.filterEntityByTitle(items, pharse)
        if (!items) return []

        const availableOptions = items.map(item => ({
            id: item.id,
            name: item.entityInfo.name.display,
        }))

        return availableOptions
    } catch (err) {
        console.log(err)
        return []
    }
}


export const entityItemService = {
    getEmptyEntityItem,
    getMiniProfilesByPharse
}
