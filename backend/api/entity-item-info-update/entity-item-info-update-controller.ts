import { entityItemInfoUpdateService } from "./entity-item-info-update-service"
import { loggerService } from "../../services/logger-service"

import { EntityItemViewUpdateAction } from "../../models/entities/items/misc/entity-item-view-update-action"


const updateViewState = async (req: any, res: any) => {
    loggerService.debug('Updating entity items view counters')

    try {
        await entityItemInfoUpdateService.updateViews(req.body as EntityItemViewUpdateAction[])
        res.json()
    } catch {
        res.status(500).send({ err: 'Failed to update entity items view count' })
    }
}


export const entityItemInfoUpdateConreoller = {
    updateViewState
}