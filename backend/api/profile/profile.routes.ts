import express from "express"
import { logger } from "../../middlewares/logger"
import { requireAuth } from "../../middlewares/require.auth"


import { profileController } from './profile.controller'


export const profileRouter = express.Router()


profileRouter.get('/', logger, profileController.get)
profileRouter.get('/:id', profileController.getById)
profileRouter.put('/:id', requireAuth, profileController.save)
profileRouter.post('/', requireAuth, profileController.save)