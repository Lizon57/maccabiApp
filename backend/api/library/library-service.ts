import { ObjectId } from "mongodb"
import { LibraryFilterby } from "../../models/entities/items/library/library-filterby"
import { Library } from "../../models/entities/items/library/library"
import { Sortby } from "../../models/entities/items/misc/sortby"
import { databaseService } from "../../services/database-service"
import { loggerService } from "../../services/logger-service"


const DB_NAME = 'library'

const query = async (filterby: LibraryFilterby = {}, sortby: Sortby = { order: 1, key: 'entityInfo.name.display' }) => {
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
        const item = await collection.findOne({ _id: new ObjectId(id) })
        return item
    } catch (err) {
        loggerService.error('cannot find library item', err)
        throw err
    }
}


const update = async (libraryItem: Library) => {
    try {
        const existLibraryItem = await getById(libraryItem._id.toString()) as Library

        const libraryItemToUpdate = {
            _id: new ObjectId(libraryItem._id),

            relatedInfo: {
                miniProfile: {
                    profileId: libraryItem.relatedInfo.miniProfile?.profileId,
                    displayName: libraryItem.relatedInfo.miniProfile?.displayName,
                    profileImageUrl: libraryItem.relatedInfo.miniProfile?.profileImageUrl,
                },
                branchIds: libraryItem.relatedInfo.branchIds || []
            },

            entityInfo: {
                name: {
                    display: libraryItem.entityInfo.name.display,
                    he: {
                        private: libraryItem.entityInfo.name.he?.private || undefined,
                        middle: libraryItem.entityInfo.name.he?.middle || undefined,
                        family: libraryItem.entityInfo.name.he?.family || undefined,
                        nickname: libraryItem.entityInfo.name.he?.nickname || undefined,
                    }
                },
                item: {
                    writers: libraryItem.entityInfo.item.writers || [],
                    publishers: libraryItem.entityInfo.item.publishers || [],
                    pageCount: libraryItem.entityInfo.item.pageCount || undefined,
                    publishYear: libraryItem.entityInfo.item.publishYear || undefined,
                    isBiography: (typeof libraryItem.entityInfo.item.isBiography === 'boolean') ? libraryItem.entityInfo.item.isBiography : undefined,
                    isTranslated: (typeof libraryItem.entityInfo.item.isTranslated === 'boolean') ? libraryItem.entityInfo.item.isTranslated : undefined,
                },
                miniCategories: libraryItem.entityInfo.miniCategories || []
            },

            itemInfo: {
                ...libraryItem.itemInfo,
                history: {
                    totalEditCount: ++existLibraryItem.itemInfo.history.totalEditCount,
                    lastEditDate: new Date()
                }
            },

            imagesIds: libraryItem.imagesIds,
            miniImages: libraryItem.miniImages
        }

        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: libraryItemToUpdate._id }, { $set: libraryItemToUpdate })
        return libraryItemToUpdate
    } catch (err) {
        loggerService.error('cannot update library item', err)
        throw err
    }
}


const add = async (libraryItem: Library) => {
    if (!libraryItem.entityInfo.name.display) throw new Error('Missing required data')

    try {
        const libraryItemToAdd = {
            relatedInfo: {
                miniProfile: {
                    profileId: libraryItem.relatedInfo.miniProfile?.profileId,
                    displayName: libraryItem.relatedInfo.miniProfile?.displayName,
                    profileImageUrl: libraryItem.relatedInfo.miniProfile?.profileImageUrl,
                },
                branchIds: libraryItem.relatedInfo.branchIds || []
            },

            entityInfo: {
                name: {
                    display: libraryItem.entityInfo.name.display,
                    he: {
                        private: libraryItem.entityInfo.name.he?.private || undefined,
                        middle: libraryItem.entityInfo.name.he?.middle || undefined,
                        family: libraryItem.entityInfo.name.he?.family || undefined,
                        nickname: libraryItem.entityInfo.name.he?.nickname || undefined,
                    }
                },
                item: {
                    writers: libraryItem.entityInfo.item.writers || [],
                    publishers: libraryItem.entityInfo.item.publishers || [],
                    pageCount: libraryItem.entityInfo.item.pageCount || undefined,
                    publishYear: libraryItem.entityInfo.item.publishYear || undefined,
                    isBiography: (typeof libraryItem.entityInfo.item.isBiography === 'boolean') ? libraryItem.entityInfo.item.isBiography : undefined,
                    isTranslated: (typeof libraryItem.entityInfo.item.isTranslated === 'boolean') ? libraryItem.entityInfo.item.isTranslated : undefined,
                },
                miniCategories: libraryItem.entityInfo.miniCategories || []
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

            imagesIds: libraryItem.imagesIds || [],
            miniImages: libraryItem.miniImages || []
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedLibraryItem = await collection.insertOne(libraryItemToAdd)
        return addedLibraryItem
    } catch (err) {
        loggerService.error('cannot add libraryItem', err)
        throw err
    }
}


const removeById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: { isArchived: true } })
        return id
    } catch (err) {
        loggerService.error(`cannot remove library item ${id}`, err)
        throw err
    }
}


const _buildCriteria = (filterBy: LibraryFilterby = {}) => {
    const criteria: { [key: string]: any } = {}

    if (filterBy.pageName) criteria['entityInfo.name.display'] = {
        $regex: filterBy.pageName, $options: 'ig'
    }

    if (filterBy.includeBranches) criteria['relatedInfo.branchIds'] = { $in: filterBy.includeBranches.split(',') }

    if (filterBy.writer.type >= 0) {
        const writerList = filterBy.writer.writers.split(',').join('|')

        switch (filterBy.writer.type) {
            case 0:
                criteria['entityInfo.item.writers'] = { $regex: `^${writerList}`, $options: 'i' }
                break
            case 1:
                criteria['entityInfo.item.writers'] = { $regex: `${writerList}$`, $options: 'i' }
                break
            case 2:
                criteria['entityInfo.item.writers'] = { $regex: writerList, $options: 'ig' }
                break
        }
    }

    if (filterBy.publisher.type >= 0) {
        const publisherList = filterBy.publisher.publishers.split(',').join('|')

        switch (filterBy.publisher.type) {
            case 0:
                criteria['entityInfo.item.publishers'] = { $regex: `^${publisherList}`, $options: 'i' }
                break
            case 1:
                criteria['entityInfo.item.publishers'] = { $regex: `${publisherList}$`, $options: 'i' }
                break
            case 2:
                criteria['entityInfo.item.publishers'] = { $regex: publisherList, $options: 'ig' }
                break
        }
    }

    if (filterBy.pageCount.type >= 0) {
        const pageCountFilter = filterBy.pageCount.count.split('|')
        const minPageCount = ((+pageCountFilter[0] - 1) === -1) ? 0 : +pageCountFilter[0] - 1
        switch (filterBy.pageCount.type) {
            case 0:
                criteria['entityInfo.item.pageCount'] = { $gte: minPageCount }
                break
            case 1:
                criteria['entityInfo.item.pageCount'] = { $lte: +pageCountFilter[1] }
                break
            case 2:
                console.log(minPageCount, +pageCountFilter[1])
                criteria['entityInfo.item.pageCount'] = { $gte: minPageCount, $lte: +pageCountFilter[1] }
                break
        }
    }

    if (filterBy.publishYear.type >= 0) {
        const publishYearFilter = filterBy.publishYear.count.split('|')
        const minPublishYear = ((+publishYearFilter[0] - 1) === -1) ? 0 : +publishYearFilter[0] - 1
        switch (filterBy.publishYear.type) {
            case 0:
                criteria['entityInfo.item.publishYear'] = { $gte: minPublishYear }
                break
            case 1:
                criteria['entityInfo.item.publishYear'] = { $lte: +publishYearFilter[1] }
                break
            case 2:
                console.log(minPublishYear, +publishYearFilter[1])
                criteria['entityInfo.item.publishYear'] = { $gte: minPublishYear, $lte: +publishYearFilter[1] }
                break
        }
    }

    if (filterBy.isBiography) {
        const isBiography = (filterBy.isBiography === 'true')
        if (isBiography) criteria['relatedInfo.miniProfile.profileId'] = { $exists: true }
        if (!isBiography) criteria['relatedInfo.miniProfile.profileId'] = { $exists: false }
    }

    if (filterBy.isTranslated) {
        const isTranslated = (filterBy.isTranslated === 'true')
        if (isTranslated) criteria['entityInfo.item.isTranslated'] = { $eq: true }
        if (!isTranslated) criteria['entityInfo.item.isTranslated'] = { $eq: false }
    }

    if (!filterBy.isArchived) criteria.isArchived = { $ne: true }
    else if (filterBy.isArchived) {
        if (filterBy.isArchived === 'only-archived') criteria.isArchived = { $ne: false }
        else if (filterBy.isArchived === 'both') delete criteria.isArchived
    }

    return criteria
}



export const libraryService = {
    query,
    getById,
    update,
    add,
    removeById
}