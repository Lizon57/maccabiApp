import express from "express"
import { requireAuth, requireEditor } from "../../middlewares/require-auth"
import { libraryController } from './library-controller'


export const libraryRouter = express.Router()


libraryRouter.get('/', libraryController.get)
libraryRouter.get('/:id', libraryController.getById)
libraryRouter.put('/:id', requireAuth, libraryController.save)
libraryRouter.post('/', requireAuth, requireEditor, libraryController.save)
libraryRouter.delete('/:id', requireAuth, requireEditor, libraryController.removeById)