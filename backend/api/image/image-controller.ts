import { loggerService } from "../../services/logger-service"
import { imageService } from "./image-service"


const get = async (req: any, res: any) => {
    loggerService.debug('Getting images')

    try {
        const images = await imageService.query()
        res.json(images)
    } catch (err) {
        loggerService.error('Failed to get images', err)
        res.status(500).send({ err: 'Failed to get images' })
    }
}

const getById = async (req: any, res: any) => {
    loggerService.debug('Getting image by id')

    try {
        const id = req.params.id
        const image = await imageService.getById(id)
        res.json(image)
    } catch (err) {
        loggerService.error('Failed to get image', err)
        res.status(500).send({ err: 'Failed to get image' })
    }
}


const save = async (req: any, res: any) => {
    try {
        const image = req.body
        if (image._id) {
            const savedImage = await imageService.update(image)
            res.json(savedImage)
        } else {
            const addedImage = await imageService.add(image)
            res.json(addedImage)
        }
    } catch (err) {
        loggerService.error('Failed to save image', err)
        res.status(500).send({ err: 'Failed to save image' })
    }
}


export const imageController = {
    get,
    getById,
    save
}
