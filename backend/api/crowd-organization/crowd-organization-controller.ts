import escape from 'escape-html'
import { Sortby } from "../../models/entities/items/misc/sortby"
import { loggerService } from "../../services/logger-service"
import { crowdOrganizationService } from "./crowd-organization-service"


const get = async (req: any, res: any) => {
    loggerService.debug('Getting crowd organizations')

    const filterBy = {
        pageName: req.query.fDisplayName,
        includeBranches: req.query.fBranchIds,
        isActive: req.query.fIsActive,
        activityDuration: {
            start: {
                type: +req.query.fDateOfActivityStartType,
                date: req.query.fDateOfActivityStart,
            },
            end: {
                type: +req.query.fDateOfActivityEndType,
                date: req.query.fDateOfActivityEnd,
            }
        },
        isArchived: req.query.fArchived
    }

    const sortby: Sortby = {
        order: (req.query.sOrder === 'asc') ? 1 : -1,
        key: req.query.sKey
    }

    try {
        const crowdOrganizations = await crowdOrganizationService.query(filterBy, sortby)
        res.json(crowdOrganizations)
    } catch (err) {
        loggerService.error('Failed to get crowd organizations', err)
        res.status(500).send({ err: 'Failed to get crowd organizations' })
    }
}

const getById = async (req: any, res: any) => {
    loggerService.debug('Getting crowd organization by id')
    const id = req.params.id

    try {
        const crowdOrganization = await crowdOrganizationService.getById(id)
        res.json(crowdOrganization)
    } catch (err) {
        loggerService.error(`Failed to get crowd organization (${id})`, err)
        res.status(500).send({ err: 'Failed to get crowd organization' })
    }
}


const save = async (req: any, res: any) => {
    loggerService.debug('Saving crowd organization')

    try {
        const signature = req.body
        if (signature._id) {
            const savedSignature = await crowdOrganizationService.update(signature)
            res.json(savedSignature)
        } else {
            const addedSignature = await crowdOrganizationService.add(signature)
            res.json(addedSignature)
        }
    } catch (err) {
        loggerService.error('Failed to save crowd organization', err)
        res.status(500).send({ err: 'Failed to save crowd organization' })
    }
}


const removeById = async (req: any, res: any) => {
    loggerService.debug('Removing crowd organization by id')
    const id = req.params.id

    try {
        const removedId = await crowdOrganizationService.removeById(id)
        res.send(escape(removedId))
    } catch (err) {
        loggerService.error(`Failed to remove crowd organization (${id})`, err)
        res.status(500).send({ err: 'Failed to remove crowd organization' })
    }
}


export const crowdOrganizationController = {
    get,
    getById,
    save,
    removeById
}
