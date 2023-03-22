import { ObjectId } from "mongodb"
import { Signature } from "../../models/entities/items/signature/signature"
import { SignatureFilterby } from "../../models/entities/items/signature/signature-filterby"
import { Sortby } from "../../models/entities/items/misc/sortby"
import { databaseService } from "../../services/database-service"
import { loggerService } from "../../services/logger-service"


const DB_NAME = 'signature'

const query = async (filterby: SignatureFilterby = {}, sortby: Sortby = { order: 1, key: 'entityInfo.name.display' }) => {
    const criteria = _buildCriteria({ ...filterby })

    try {
        const collection = await databaseService.getCollection(DB_NAME)
        let items = collection.find(criteria)
        if (sortby.key) items = items.sort({ [sortby.key]: sortby.order })
        return items.toArray()
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

            relatedInfo: {
                miniProfile: {
                    profileId: signature.relatedInfo.miniProfile?.profileId,
                    displayName: signature.relatedInfo.miniProfile?.displayName,
                    profileImageUrl: signature.relatedInfo.miniProfile?.profileImageUrl,
                },
                branchIds: signature.relatedInfo.branchIds || []
            },

            entityInfo: {
                name: {
                    display: signature.entityInfo.name.display,
                    he: {
                        private: signature.entityInfo.name.he?.private || undefined,
                        middle: signature.entityInfo.name.he?.middle || undefined,
                        family: signature.entityInfo.name.he?.family || undefined,
                        nickname: signature.entityInfo.name.he?.nickname || undefined,
                    }
                },
                miniCategories: signature.entityInfo.miniCategories || []
            },

            itemInfo: {
                ...signature.itemInfo,
                history: {
                    totalEditCount: ++existSignature.itemInfo.history.totalEditCount,
                    lastEditDate: new Date()
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
    if (!signature.entityInfo.name.display) throw new Error('Missing required data')

    try {
        const signatureToAdd = {
            relatedInfo: {
                miniProfile: {
                    profileId: signature.relatedInfo.miniProfile?.profileId,
                    displayName: signature.relatedInfo.miniProfile?.displayName,
                    profileImageUrl: signature.relatedInfo.miniProfile?.profileImageUrl,
                },
                branchIds: signature.relatedInfo.branchIds || []
            },

            entityInfo: {
                name: {
                    display: signature.entityInfo.name.display,
                    he: {
                        private: signature.entityInfo.name.he?.private || undefined,
                        middle: signature.entityInfo.name.he?.middle || undefined,
                        family: signature.entityInfo.name.he?.family || undefined,
                        nickname: signature.entityInfo.name.he?.nickname || undefined,
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


const removeById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: { isArchived: true } })
        return id
    } catch (err) {
        loggerService.error(`cannot remove signature ${id}`, err)
        throw err
    }
}


const _buildCriteria = (filterBy: SignatureFilterby = {}) => {
    const criteria: { [key: string]: any } = {}

    if (filterBy.includeBranches) criteria['relatedInfo.branchIds'] = { $in: filterBy.includeBranches.split(',') }

    if (filterBy.image.type >= 0) {
        const imageFilterCount = filterBy.image.count.split('|')
        const minImageCount = ((+imageFilterCount[0] - 1) === -1) ? 0 : +imageFilterCount[0] - 1
        switch (filterBy.image.type) {
            case 0:
                criteria[`imagesIds.${minImageCount}`] = { "$exists": true }
                break
            case 1:
                criteria[`imagesIds.${+imageFilterCount[1]}`] = { "$exists": false }
                break
            case 2:
                criteria[`imagesIds.${minImageCount}`] = { "$exists": true }
                criteria[`imagesIds.${+imageFilterCount[1]}`] = { "$exists": false }
                break
        }
    }

    if (filterBy.belongToProfileName) criteria['relatedInfo.miniProfile.displayName'] = {
        $regex: filterBy.belongToProfileName, $options: 'ig'
    }

    if (!filterBy.isArchived) criteria.isArchived = { $ne: true }
    else if (filterBy.isArchived) {
        if (filterBy.isArchived === 'only-archived') criteria.isArchived = { $ne: false }
        else if (filterBy.isArchived === 'both') delete criteria.isArchived
    }

    return criteria
}

export const signatureService = {
    query,
    getById,
    update,
    add,
    removeById
}