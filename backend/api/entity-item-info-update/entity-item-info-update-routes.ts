import express from "express"
import { requireAuth } from "../../middlewares/require-auth"
import { entityItemInfoUpdateConreoller } from "./entity-item-info-update-controller"


export const entutyItemInfoUpdateRouter = express.Router()


entutyItemInfoUpdateRouter.put('/view', entityItemInfoUpdateConreoller.updateViewState)
entutyItemInfoUpdateRouter.put('/rate', requireAuth, entityItemInfoUpdateConreoller.updateRateState)