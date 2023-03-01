import express from "express"
import { requireAuth } from "../../middlewares/require-auth"
import { profileController } from './profile-controller'


export const profileRouter = express.Router()


profileRouter.get('/', profileController.get)
profileRouter.get('/getMiniProfilesByPharse', profileController.getMiniProfilesByPharse)
profileRouter.get('/:id', profileController.getById)
profileRouter.put('/:id', requireAuth, profileController.save)
profileRouter.post('/', requireAuth, profileController.save)