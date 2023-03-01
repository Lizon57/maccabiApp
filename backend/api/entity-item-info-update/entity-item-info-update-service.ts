import { ObjectId } from "mongodb"

import { databaseService } from "../../services/database-service"
import { loggerService } from "../../services/logger-service"
import { convertKebabCaseToCamelCase } from "../../services/util/convert-kebab-case-to-camel-case"

import { EntityItemViewUpdateAction } from "../../models/entities/items/misc/entity-item-view-update-action"
import { EntityItem } from "../../models/entities/items/misc/entity-item"


const updateViews = async (views: EntityItemViewUpdateAction[]) => {
    try {
        views.forEach(async (view) => {
            const entityName = convertKebabCaseToCamelCase(view.entityName)
            loggerService.debug(`Updating entity item ${view.entityItemId} view counter`)

            const collection = await databaseService.getCollection(entityName)
            const item = await collection.findOne({ _id: new ObjectId(view.entityItemId) }) as EntityItem

            const updateDetails = {
                itemInfo: {
                    ...item.itemInfo,
                    view: item.itemInfo.view + 1
                }
            }

            await collection.updateOne({ _id: new ObjectId(view.entityItemId) }, { $set: updateDetails })
        })
    } catch (err) {
        loggerService.error(`Updating entity items view counters`)
        throw err
    }
}


export const entityItemInfoUpdateService = {
    updateViews
}