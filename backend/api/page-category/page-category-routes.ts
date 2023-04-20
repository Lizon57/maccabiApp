import express from "express"
import { requireAuth, requireEditor } from "../../middlewares/require-auth"
import { pageCategoryController } from './page-category-controller'


export const pageCategoryRouter = express.Router()


pageCategoryRouter.get('/', pageCategoryController.get)
pageCategoryRouter.get('/:id', pageCategoryController.getById)
pageCategoryRouter.put('/:id', requireAuth, pageCategoryController.save)
pageCategoryRouter.post('/', requireAuth, requireEditor, pageCategoryController.save)
pageCategoryRouter.delete('/:id', requireAuth, requireEditor, pageCategoryController.removeById)