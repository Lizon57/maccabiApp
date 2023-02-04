import { ObjectId } from "mongodb"
import { Signature } from "./../../models/entities/items/signature/signature"
import { databaseService } from "../../services/database.service"
import { loggerService } from "../../services/logger.service"


const DB_NAME = 'signature'

const query = async () => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        return await collection.find().toArray()
    } catch (err) {
        loggerService.error('cannot find signatures', err)
        throw err
    }
}


const getById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const signature = await collection.findOne({ _id: new ObjectId(id) })
        return signature
    } catch (err) {
        loggerService.error('cannot find signature', err)
        throw err
    }
}


const update = async (signature: Signature) => {
    try {
        const existSignature = await getById(signature._id.toString()) as Signature

        const signatureToUpdate = {
            _id: new ObjectId(signature._id),

            entityInfo: {
                name: {
                    display: signature.entityInfo.name,
                    he: {
                        private: signature.entityInfo.name.he.private,
                        middle: signature.entityInfo.name.he.middle,
                        family: signature.entityInfo.name.he.family,
                        nickname: signature.entityInfo.name.he.nickname,
                    }
                },
                miniCategories: signature.entityInfo.miniCategories || []
            },

            itemInfo: {
                history: {
                    totalEditCount: existSignature.itemInfo.history.totalEditCount++,
                    lastEditDate: Date.now()
                }
            },

            imagesIds: signature.imagesIds,
            miniImages: signature.miniImages
        }

        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: signatureToUpdate._id }, { $set: signatureToUpdate })
        return signatureToUpdate
    } catch (err) {
        loggerService.error('cannot update signature', err)
        throw err
    }
}


const add = async (signature: Signature) => {
    if (!signature.entityInfo.name) throw new Error('Missing required data')

    try {
        const signatureToAdd = {
            entityInfo: {
                name: {
                    display: signature.entityInfo.name,
                    he: {
                        private: signature.entityInfo.name.he.private,
                        middle: signature.entityInfo.name.he.middle,
                        family: signature.entityInfo.name.he.family,
                        nickname: signature.entityInfo.name.he.nickname,
                    }
                },
                miniCategories: signature.entityInfo.miniCategories || []
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

            imagesIds: signature.imagesIds || [],
            miniImages: signature.miniImages || []
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedSignature = await collection.insertOne(signatureToAdd)
        return addedSignature
    } catch (err) {
        loggerService.error('cannot add signature', err)
        throw err
    }
}


export const signatureService = {
    query,
    getById,
    update,
    add
}