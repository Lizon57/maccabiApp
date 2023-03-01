import express from "express"
import { requireAuth, requireEditor } from "../../middlewares/require-auth"
import { signatureController } from './signature-controller'


export const signatureRouter = express.Router()


signatureRouter.get('/', signatureController.get)
signatureRouter.get('/:id', signatureController.getById)
signatureRouter.put('/:id', requireAuth, signatureController.save)
signatureRouter.post('/', requireAuth, requireEditor, signatureController.save)
signatureRouter.delete('/:id', requireAuth, requireEditor, signatureController.removeById)