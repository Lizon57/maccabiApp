import { Sortby } from "../../models/entities/items/misc/sortby"
import { loggerService } from "../../services/logger-service"
import { signatureService } from "./signature-service"


const get = async (req: any, res: any) => {
    loggerService.debug('Getting signatures')

    const filterBy = {
        belongToProfileName: req.query.fDisplayName,
        includeBranches: req.query.fBranchIds,
        image: {
            type: +req.query.fItemImagesType,
            count: req.query.fItemImages
        },
        isArchived: req.query.fArchived
    }

    const sortby: Sortby = {
        order: (req.query.sOrder === 'asc') ? 1 : -1,
        key: req.query.sKey
    }

    try {
        const signatures = await signatureService.query(filterBy, sortby)
        res.json(signatures)
    } catch (err) {
        loggerService.error('Failed to get signatures', err)
        res.status(500).send({ err: 'Failed to get signatures' })
    }
}

const getById = async (req: any, res: any) => {
    loggerService.debug('Getting signature by id')
    const id = req.params.id

    try {
        const signature = await signatureService.getById(id)
        res.json(signature)
    } catch (err) {
        loggerService.error(`Failed to get signature (${id})`, err)
        res.status(500).send({ err: 'Failed to get signature' })
    }
}


const save = async (req: any, res: any) => {
    loggerService.debug('Saving signature')

    try {
        const signature = req.body
        if (signature._id) {
            const savedSignature = await signatureService.update(signature)
            res.json(savedSignature)
        } else {
            const addedSignature = await signatureService.add(signature)
            res.json(addedSignature)
        }
    } catch (err) {
        loggerService.error('Failed to save signature', err)
        res.status(500).send({ err: 'Failed to save signature' })
    }
}


const removeById = async (req: any, res: any) => {
    loggerService.debug('Removing signature by id')
    const id = req.params.id

    try {
        const removedId = await signatureService.removeById(id)
        res.send(removedId)
    } catch (err) {
        loggerService.error(`Failed to remove signature (${id})`, err)
        res.status(500).send({ err: 'Failed to remove signature' })
    }
}


export const signatureController = {
    get,
    getById,
    save,
    removeById
}
