import express from "express"
import { entityItemInfoUpdateConreoller } from "./entity-item-info-update-controller"


export const entutyItemInfoUpdateRouter = express.Router()


entutyItemInfoUpdateRouter.put('/view', entityItemInfoUpdateConreoller.updateViewState)