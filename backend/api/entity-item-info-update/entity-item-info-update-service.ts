import { ObjectId } from "mongodb"

import { databaseService } from "../../services/database-service"
import { asyncLocalStorage } from "../../services/als-service"
import { loggerService } from "../../services/logger-service"
import { convertKebabCaseToCamelCase } from "../../services/util/convert-kebab-case-to-camel-case"

import { EntityItemViewUpdateAction } from "../../models/entities/items/misc/entity-item-view-update-action"
import { EntityItem } from "../../models/entities/items/misc/entity-item"
import { RatePayload } from "../../models/entities/items/misc/rate-payload"
import { EntityItemRate } from "../../models/entities/items/misc/entity-item-rate"


const updateViews = async (views: EntityItemViewUpdateAction[]) => {
    try {
        views.forEach(async (view) => {
            const entityName = convertKebabCaseToCamelCase(view.entityName)
            loggerService.debug(`Updating entity item ${view.entityItemId} view counter`)

            const collection = await databaseService.getCollection(entityName)
            const item = await collection.findOne({ _id: new ObjectId(view.entityItemId) }) as EntityItem

            if (!item._id) throw new Error(`Entity item ${view.entityItemId} not found`)

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


const updateRate = async ({ id, entityName, rate }: RatePayload) => {
    loggerService.debug(`Updating entity item ${entityName}-${id} rate`)

    try {
        const { loggedinUser } = asyncLocalStorage.getStore() as any
        const camelCaseEntityName = convertKebabCaseToCamelCase(entityName)

        const collection = await databaseService.getCollection(camelCaseEntityName)
        const item = await collection.findOne({ _id: new ObjectId(id) }) as EntityItem

        if (!item._id) throw new Error(`Entity item ${id} not found`)

        const updateDetails = {
            itemInfo: {
                ...item.itemInfo,
                rate: {
                    raterCount: item.itemInfo.rate.rateMap[loggedinUser._id] ? item.itemInfo.rate.raterCount : ++item.itemInfo.rate.raterCount,
                    rateMap: {
                        ...item.itemInfo.rate.rateMap,
                        [loggedinUser._id]: rate
                    },
                    avg: 0
                }
            }
        }
        updateDetails.itemInfo.rate.avg = _calcRateAvg(updateDetails.itemInfo.rate)

        await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateDetails })
        return updateDetails.itemInfo.rate
    } catch (err) {
        loggerService.error(`Updating entity item ${entityName}-${id} rate`)
        throw err
    }
}


const _calcRateAvg = (rate: EntityItemRate) => {
    const totalRate = Object.values(rate.rateMap).reduce((acc, currRate) => acc + currRate, 0)
    const avg = Number((totalRate / rate.raterCount).toFixed(1))
    return avg
}


export const entityItemInfoUpdateService = {
    updateViews,
    updateRate
}