import express from "express"
import { requireAuth } from "../../middlewares/require.auth"
import { imageController } from './image.controller'


export const imageRouter = express.Router()


imageRouter.get('/', imageController.get)
imageRouter.get('/:id', imageController.getById)
imageRouter.put('/:id', requireAuth, imageController.save)
imageRouter.post('/', requireAuth, imageController.save)