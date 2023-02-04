import { loggerService } from "../../services/logger.service"
import { signatureService } from "./signature.service"


const get = async (req: any, res: any) => {
    loggerService.debug('Getting signatures')

    try {
        const signatures = await signatureService.query()
        res.json(signatures)
    } catch (err) {
        loggerService.error('Failed to get signatures', err)
        res.status(500).send({ err: 'Failed to get signatures' })
    }
}

const getById = async (req: any, res: any) => {
    loggerService.debug('Getting signature by id')

    try {
        const id = req.params.id
        const signature = await signatureService.getById(id)
        res.json(signature)
    } catch (err) {
        loggerService.error('Failed to get signature', err)
        res.status(500).send({ err: 'Failed to get signature' })
    }
}


const save = async (req: any, res: any) => {
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


export const signatureController = {
    get,
    getById,
    save
}
