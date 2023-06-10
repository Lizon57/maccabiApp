import { entityItemInfoUpdateService } from "./entity-item-info-update-service"
import { loggerService } from "../../services/logger-service"
import { asyncLocalStorage } from "../../services/als-service"
import { userService } from "../user/user-service"

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


const updateLikeState = async (req: any, res: any) => {
    loggerService.debug('Updating entity item like state')

    try {
        const { loggedinUser } = asyncLocalStorage.getStore() as any
        const user = await userService.getById(loggedinUser._id)

        if (!user?.likedPageMap) user.likedPageMap = {
            [req.body.likeStatePayload.entityName]: []
        }

        let likedPagesByEntityName = user.likedPageMap[req.body.likeStatePayload.entityName]
        const entityId = req.body.likeStatePayload.id

        if (!likedPagesByEntityName?.length) likedPagesByEntityName = [entityId]
        else {
            const idx = likedPagesByEntityName.findIndex(id => id === entityId)
            if (idx === -1) likedPagesByEntityName.push(entityId)
            else likedPagesByEntityName.splice(idx, 1)
        }

        if (!likedPagesByEntityName.length) delete user.likedPageMap[req.body.likeStatePayload.entityName]
        else user.likedPageMap[req.body.likeStatePayload.entityName] = likedPagesByEntityName

        await userService.update(user)
        res.send()
    } catch {
        res.status(500).send({ err: 'Failed to update entity item like' })
    }
}


export const entityItemInfoUpdateController = {
    updateViewState,
    updateRateState,
    updateLikeState
}