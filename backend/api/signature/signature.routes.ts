import express from "express"
import { logger } from "../../middlewares/logger"
import { requireAuth } from "../../middlewares/require.auth"


import { signatureController } from './signature.controller'


export const signatureRouter = express.Router()


signatureRouter.get('/', logger, signatureController.get)
signatureRouter.get('/:id', signatureController.getById)
signatureRouter.put('/:id', requireAuth, signatureController.save)
signatureRouter.post('/', requireAuth, signatureController.save)