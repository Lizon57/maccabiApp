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
        const signature = collection.findOne({ _id: new ObjectId(id) })
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

                ctgIds: signature.entityInfo.ctgIds || [],
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
        const updatedSignature = collection.insertOne(signatureToUpdate)
        return updatedSignature
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

                ctgIds: signature.entityInfo.ctgIds || [],
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
                    lastEditDate: Date
                }
            },

            imagesIds: signature.imagesIds || [],
            miniImages: signature.miniImages || []
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedSignature = collection.insertOne(signatureToAdd)
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