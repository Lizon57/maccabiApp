import express from "express"
import { requireAuth, requireEditor } from "../../middlewares/require-auth"
import { crowdOrganizationController } from './crowd-organization-controller'


export const crowdOrganizationRouter = express.Router()


crowdOrganizationRouter.get('/', crowdOrganizationController.get)
crowdOrganizationRouter.get('/:id', crowdOrganizationController.getById)
crowdOrganizationRouter.put('/:id', requireAuth, crowdOrganizationController.save)
crowdOrganizationRouter.post('/', requireAuth, requireEditor, crowdOrganizationController.save)
crowdOrganizationRouter.delete('/:id', requireAuth, requireEditor, crowdOrganizationController.removeById)