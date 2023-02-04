import { ObjectId } from "mongodb"
import { Image } from "./../../models/entities/items/image/image"
import { databaseService } from "../../services/database.service"
import { loggerService } from "../../services/logger.service"


const DB_NAME = 'image'

const query = async () => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        return await collection.find().toArray()
    } catch (err) {
        loggerService.error('cannot find images', err)
        throw err
    }
}


const getById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const image = collection.findOne({ _id: new ObjectId(id) })
        return image
    } catch (err) {
        loggerService.error('cannot find image', err)
        throw err
    }
}


const update = async (image: Image) => {
    try {
        const existImage = await getById(image._id.toString()) as Image

        const imageToUpdate = {
            _id: new ObjectId(image._id),

            entityInfo: {
                name: {
                    display: image.entityInfo.name,
                },
                imageUrl: image.entityInfo.imageUrl,
                miniCategories: image.entityInfo.miniCategories
            },

            itemInfo: {
                history: {
                    totalEditCount: existImage.itemInfo.history.totalEditCount++,
                    lastEditDate: Date.now()
                }
            },
        }

        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: imageToUpdate._id }, { $set: imageToUpdate })
        return imageToUpdate
    } catch (err) {
        loggerService.error('cannot update image', err)
        throw err
    }
}


const add = async (image: Image) => {
    if (!image.entityInfo.name) throw new Error('Missing required data')

    try {
        const imageToAdd = {
            entityInfo: {
                name: {
                    display: image.entityInfo.name,
                },
                imageUrl: image.entityInfo.imageUrl,
                miniCategories: image.entityInfo.miniCategories
            },

            itemInfo: {
                view: 0,
                rate: {
                    raterCount: 0,
                    rateMap: {
                    }
                },
                history: {
                    totalEditCount: 0,
                }
            },
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedImage = await collection.insertOne(imageToAdd)
        return addedImage
    } catch (err) {
        loggerService.error('cannot add image', err)
        throw err
    }
}


export const imageService = {
    query,
    getById,
    update,
    add
}