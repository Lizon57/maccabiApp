import express from "express"
import { authController } from "./auth.controller"

export const authRouter = express.Router()

authRouter.post('/login', authController.login)
authRouter.post('/signup', authController.signup)
authRouter.post('/logout', authController.logout)
