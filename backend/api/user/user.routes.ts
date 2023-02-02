import express from "express"
import { userController } from './user.controller'
export const userRouter = express.Router()


userRouter.get('/', userController.getUsers)
userRouter.get('/:id', userController.getUser)
userRouter.put('/:id', userController.save)
userRouter.post('/', userController.save)
