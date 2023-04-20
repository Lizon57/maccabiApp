import express from "express"
import { pageCategoryController } from './page-category-controller'


export const pageCategoryRouter = express.Router()


pageCategoryRouter.get('/:id', pageCategoryController.getById)