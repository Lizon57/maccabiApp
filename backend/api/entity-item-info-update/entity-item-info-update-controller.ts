import { entityItemInfoUpdateService } from "./entity-item-info-update-service"
import { loggerService } from "../../services/logger-service"

import { EntityItemViewUpdateAction } from "../../models/entities/items/misc/entity-item-view-update-action"
import { RatePayload } from "../../models/entities/items/misc/rate-payload"


const updateViewState = async (req: any, res: any) => {
    loggerService.debug('Updating entity items view counters')

    try {
        await entityItemInfoUpdateService.updateViews(req.body as EntityItemViewUpdateAction[])
        res.json()
    } catch {
        res.status(500).send({ err: 'Failed to update entity items view count' })
    }
}


const updateRateState = async (req: any, res: any) => {
    loggerService.debug('Updating entity item rate')

    try {
        const updatedRate = await entityItemInfoUpdateService.updateRate(req.body.ratePayload as RatePayload)
        res.json(updatedRate)
    } catch {
        res.status(500).send({ err: 'Failed to update entity item rate' })
    }
}


export const entityItemInfoUpdateConreoller = {
    updateViewState,
    updateRateState
}