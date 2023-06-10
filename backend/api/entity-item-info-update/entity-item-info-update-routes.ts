import express from "express"
import { requireAuth } from "../../middlewares/require-auth"
import { entityItemInfoUpdateController } from "./entity-item-info-update-controller"


export const entutyItemInfoUpdateRouter = express.Router()


entutyItemInfoUpdateRouter.put('/view', entityItemInfoUpdateController.updateViewState)
entutyItemInfoUpdateRouter.put('/rate', requireAuth, entityItemInfoUpdateController.updateRateState)
entutyItemInfoUpdateRouter.put('/like', requireAuth, entityItemInfoUpdateController.updateLikeState)