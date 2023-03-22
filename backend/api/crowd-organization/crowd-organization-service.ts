import { ObjectId } from "mongodb"
import { CrowdOrganizationFilterby } from "../../models/entities/items/crowd-organization/crowd-organization-filterby"
import { CrowdOrganization } from "../../models/entities/items/crowd-organization/crowd-organization"
import { Sortby } from "../../models/entities/items/misc/sortby"
import { databaseService } from "../../services/database-service"
import { loggerService } from "../../services/logger-service"


const DB_NAME = 'crowdOrganization'

const query = async (filterby: CrowdOrganizationFilterby = {}, sortby: Sortby = { order: 1, key: 'entityInfo.name.display' }) => {
    const criteria = _buildCriteria({ ...filterby })

    try {
        const collection = await databaseService.getCollection(DB_NAME)
        let items = collection.find(criteria)
        if (sortby.key) items = items.sort({ [sortby.key]: sortby.order })
        return items.toArray()
    } catch (err) {
        loggerService.error('cannot find crowd organizations', err)
        throw err
    }
}


const getById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const crowdOrganization = await collection.findOne({ _id: new ObjectId(id) })
        return crowdOrganization
    } catch (err) {
        loggerService.error('cannot find crowd organizationService', err)
        throw err
    }
}


const update = async (crowdOrganization: CrowdOrganization) => {
    try {
        const existCrowdOrganization = await getById(crowdOrganization._id.toString()) as CrowdOrganization

        const crowdOrganizationToUpdate = {
            _id: new ObjectId(crowdOrganization._id),

            relatedInfo: {
                branchIds: crowdOrganization.relatedInfo.branchIds || []
            },

            entityInfo: {
                name: {
                    display: crowdOrganization.entityInfo.name.display,
                    he: {
                        private: crowdOrganization.entityInfo.name.he?.private || undefined,
                        middle: crowdOrganization.entityInfo.name.he?.middle || undefined,
                        family: crowdOrganization.entityInfo.name.he?.family || undefined,
                        nickname: crowdOrganization.entityInfo.name.he?.nickname || undefined,
                    }
                },
                item: {
                    isActive: crowdOrganization.entityInfo.item.isActive,
                    activityDurations: crowdOrganization.entityInfo.item.activityDurations
                },
                miniCategories: crowdOrganization.entityInfo.miniCategories || []
            },

            itemInfo: {
                ...crowdOrganization.itemInfo,
                history: {
                    totalEditCount: ++existCrowdOrganization.itemInfo.history.totalEditCount,
                    lastEditDate: new Date()
                }
            },

            imagesIds: crowdOrganization.imagesIds,
            miniImages: crowdOrganization.miniImages
        }

        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: crowdOrganizationToUpdate._id }, { $set: crowdOrganizationToUpdate })
        return crowdOrganizationToUpdate
    } catch (err) {
        loggerService.error('cannot update crowd organization', err)
        throw err
    }
}


const add = async (crowdOrganization: CrowdOrganization) => {
    if (!crowdOrganization.entityInfo.name.display) throw new Error('Missing required data')

    try {
        const crowdOragnizationToAdd = {
            relatedInfo: {
                branchIds: crowdOrganization.relatedInfo.branchIds || []
            },

            entityInfo: {
                name: {
                    display: crowdOrganization.entityInfo.name.display,
                    he: {
                        private: crowdOrganization.entityInfo.name.he?.private || undefined,
                        middle: crowdOrganization.entityInfo.name.he?.middle || undefined,
                        family: crowdOrganization.entityInfo.name.he?.family || undefined,
                        nickname: crowdOrganization.entityInfo.name.he?.nickname || undefined,
                    }
                },
                item: {
                    isActive: crowdOrganization.entityInfo.item.isActive,
                    activityDurations: crowdOrganization.entityInfo.item.activityDurations
                },
                miniCategories: crowdOrganization.entityInfo.miniCategories || []
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

            imagesIds: crowdOrganization.imagesIds || [],
            miniImages: crowdOrganization.miniImages || []
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedCrowdOrganization = await collection.insertOne(crowdOragnizationToAdd)
        return addedCrowdOrganization
    } catch (err) {
        loggerService.error('cannot add crowdOrganization', err)
        throw err
    }
}


const removeById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: { isArchived: true } })
        return id
    } catch (err) {
        loggerService.error(`cannot remove crowd organization ${id}`, err)
        throw err
    }
}


const _buildCriteria = (filterBy: CrowdOrganizationFilterby = {}) => {
    const criteria: { [key: string]: any } = {}

    if (filterBy.pageName) criteria['entityInfo.name.display'] = {
        $regex: filterBy.pageName, $options: 'ig'
    }

    if (filterBy.includeBranches) criteria['relatedInfo.branchIds'] = { $in: filterBy.includeBranches.split(',') }

    if (!!filterBy.isActive) criteria['entityInfo.item.isActive'] = { $ne: !JSON.parse(filterBy.isActive) }

    if (!filterBy.isArchived) criteria.isArchived = { $ne: true }
    else if (filterBy.isArchived) {
        if (filterBy.isArchived === 'only-archived') criteria.isArchived = { $ne: false }
        else if (filterBy.isArchived === 'both') delete criteria.isArchived
    }

    if (filterBy.activityDuration.start.date) {
        const startDurationDates = filterBy.activityDuration.start.date.split('-')
        const startDuration: DurationFilter = {
            day: (startDurationDates[0] !== 'undefined') ? +startDurationDates[0] : null,
            month: (startDurationDates[1] !== 'undefined') ? +startDurationDates[1] : null,
            year: (startDurationDates[2] !== 'undefined') ? +startDurationDates[2] : null,
        }


        if (Object.keys(startDuration)) {
            if (!filterBy.activityDuration.start.type) {
                if (!startDuration.day && !startDuration.month) {
                    criteria['entityInfo.item.activityDurations'] = { $elemMatch: { 'start.year': { $gte: startDuration.year } } }
                }
                else if (!startDuration.day) {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.start.year': { $gt: startDuration.year } },
                        {
                            'entityInfo.item.activityDurations.start.year': { $eq: startDuration.year },
                            'entityInfo.item.activityDurations.start.month': { $gte: startDuration.month },
                        },
                    ]
                }
                else {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.start.year': { $gt: startDuration.year } },
                        {
                            'entityInfo.item.activityDurations.start.year': { $eq: startDuration.year },
                            'entityInfo.item.activityDurations.start.month': { $gt: startDuration.month },
                        },
                        {
                            'entityInfo.item.activityDurations.start.year': { $eq: startDuration.year },
                            'entityInfo.item.activityDurations.start.month': { $eq: startDuration.month },
                            'entityInfo.item.activityDurations.start.day': { $gte: startDuration.day },
                        },
                    ]
                }
            } else if (filterBy.activityDuration.start.type === 1) {
                if (!startDuration.day && !startDuration.month) {
                    criteria['entityInfo.item.activityDurations'] = { $elemMatch: { 'start.year': { $lte: startDuration.year } } }
                }
                else if (!startDuration.day) {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.start.year': { $lt: startDuration.year } },
                        {
                            'entityInfo.item.activityDurations.start.year': { $eq: startDuration.year },
                            'entityInfo.item.activityDurations.start.month': { $lte: startDuration.month },
                        },
                    ]
                }
                else {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.start.year': { $lt: startDuration.year } },
                        {
                            'entityInfo.item.activityDurations.start.year': { $eq: startDuration.year },
                            'entityInfo.item.activityDurations.start.month': { $lt: startDuration.month },
                        },
                        {
                            'entityInfo.item.activityDurations.start.year': { $eq: startDuration.year },
                            'entityInfo.item.activityDurations.start.month': { $eq: startDuration.month },
                            'entityInfo.item.activityDurations.start.day': { $lte: startDuration.day },
                        },
                    ]
                }
            } else if (filterBy.activityDuration.start.type === 2) {
                if (!startDuration.day && !startDuration.month) {
                    criteria['entityInfo.item.activityDurations'] = { $elemMatch: { 'start.year': { $eq: startDuration.year } } }
                }
                else if (!startDuration.day) {
                    criteria['entityInfo.item.activityDurations'] = {
                        $elemMatch: {
                            'start.year': { $eq: startDuration.year },
                            'start.month': { $eq: startDuration.month }
                        }
                    }
                }
                else {
                    criteria['entityInfo.item.activityDurations'] = {
                        $elemMatch: {
                            'start.year': { $eq: startDuration.year },
                            'start.month': { $eq: startDuration.month },
                            'start.day': { $eq: startDuration.day }
                        }
                    }
                }
            }
        }
    }

    if (filterBy.activityDuration.end.date) {
        const endDurationDates = filterBy.activityDuration.end.date.split('-')
        const endDuration: DurationFilter = {
            day: (endDurationDates[0] !== 'undefined') ? +endDurationDates[0] : null,
            month: (endDurationDates[1] !== 'undefined') ? +endDurationDates[1] : null,
            year: (endDurationDates[2] !== 'undefined') ? +endDurationDates[2] : null,
        }

        if (Object.keys(endDuration)) {
            if (!filterBy.activityDuration.end.type) {
                if (!endDuration.day && !endDuration.month) {
                    criteria['entityInfo.item.activityDurations'] = { $elemMatch: { 'end.year': { $gte: endDuration.year } } }
                }
                else if (!endDuration.day) {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.end.year': { $gt: endDuration.year } },
                        {
                            'entityInfo.item.activityDurations.end.year': { $eq: endDuration.year },
                            'entityInfo.item.activityDurations.end.month': { $gte: endDuration.month },
                        },
                    ]
                }
                else {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.end.year': { $gt: endDuration.year } },
                        {
                            'entityInfo.item.activityDurations.end.year': { $eq: endDuration.year },
                            'entityInfo.item.activityDurations.end.month': { $gt: endDuration.month },
                        },
                        {
                            'entityInfo.item.activityDurations.end.year': { $eq: endDuration.year },
                            'entityInfo.item.activityDurations.end.month': { $eq: endDuration.month },
                            'entityInfo.item.activityDurations.end.day': { $gte: endDuration.day },
                        },
                    ]
                }
            } else if (filterBy.activityDuration.end.type === 1) {
                if (!endDuration.day && !endDuration.month) {
                    criteria['entityInfo.item.activityDurations'] = { $elemMatch: { 'end.year': { $lte: endDuration.year } } }
                }
                else if (!endDuration.day) {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.end.year': { $lt: endDuration.year } },
                        {
                            'entityInfo.item.activityDurations.end.year': { $eq: endDuration.year },
                            'entityInfo.item.activityDurations.end.month': { $lte: endDuration.month },
                        },
                    ]
                }
                else {
                    criteria.$or = [
                        { 'entityInfo.item.activityDurations.end.year': { $lt: endDuration.year } },
                        {
                            'entityInfo.item.activityDurations.end.year': { $eq: endDuration.year },
                            'entityInfo.item.activityDurations.end.month': { $lt: endDuration.month },
                        },
                        {
                            'entityInfo.item.activityDurations.end.year': { $eq: endDuration.year },
                            'entityInfo.item.activityDurations.end.month': { $eq: endDuration.month },
                            'entityInfo.item.activityDurations.end.day': { $lte: endDuration.day },
                        },
                    ]
                }
            } else if (filterBy.activityDuration.end.type === 2) {
                if (!endDuration.day && !endDuration.month) {
                    criteria['entityInfo.item.activityDurations'] = { $elemMatch: { 'end.year': { $eq: endDuration.year } } }
                }
                else if (!endDuration.day) {
                    criteria['entityInfo.item.activityDurations'] = {
                        $elemMatch: {
                            'end.year': { $eq: endDuration.year },
                            'end.month': { $eq: endDuration.month }
                        }
                    }
                }
                else {
                    criteria['entityInfo.item.activityDurations'] = {
                        $elemMatch: {
                            'end.year': { $eq: endDuration.year },
                            'end.month': { $eq: endDuration.month },
                            'end.day': { $eq: endDuration.day }
                        }
                    }
                }
            }
        }
    }

    return criteria
}

export const crowdOrganizationService = {
    query,
    getById,
    update,
    add,
    removeById
}



type DurationFilter = {
    day?: number
    month?: number
    year?: number
}