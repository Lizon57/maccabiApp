import { ObjectId } from "mongodb"
import { Profile } from "../../models/entities/items/profile/profile"
import { databaseService } from "../../services/database.service"
import { loggerService } from "../../services/logger.service"


const DB_NAME = 'profile'

const query = async () => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        return await collection.find().toArray()
    } catch (err) {
        loggerService.error('cannot find profiles', err)
        throw err
    }
}


const getById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const profile = collection.findOne({ _id: new ObjectId(id) })
        return profile
    } catch (err) {
        loggerService.error('cannot find profile', err)
        throw err
    }
}


const update = async (profile: Profile) => {
    try {
        const existProfile = await getById(profile._id.toString()) as Profile

        const profileToUpdate = {
            relatedInfo: {
                profileImageId: profile.relatedInfo?.profileImageId,
                branchIds: profile.relatedInfo?.branchIds,
            },

            entityInfo: {
                name: {
                    display: profile.entityInfo.name,
                    he: {
                        private: profile.entityInfo.name.he?.private,
                        middle: profile.entityInfo.name.he?.middle,
                        family: profile.entityInfo.name.he?.family,
                        nickname: profile.entityInfo.name.he?.nickname,
                    }
                },

                ctgIds: profile.entityInfo.ctgIds || [],
                miniCategories: profile.entityInfo.miniCategories || [],

                item: {
                    dateOfActivity: {
                        isActive: profile.entityInfo.item?.dateOfActivity?.isActive,
                        activityDurations: profile.entityInfo.item?.dateOfActivity?.activityDurations
                    }
                },
                lifetime: {
                    born: {
                        date: profile.entityInfo.lifetime?.born,
                        uncomplete: profile.entityInfo.lifetime?.born?.uncomplete,
                        location: {
                            city: profile.entityInfo.lifetime?.born?.location.city,
                            region: profile.entityInfo.lifetime?.born?.location.region,
                            country: profile.entityInfo.lifetime?.born?.location.country,
                        }
                    },
                    died: {
                        date: profile.entityInfo.lifetime?.died?.date,
                        uncomplete: profile.entityInfo.lifetime?.died?.uncomplete,
                    }
                }
            },

            itemInfo: {
                history: {
                    totalEditCount: existProfile.itemInfo.history.totalEditCount++,
                    lastEditDate: Date.now()
                }
            },

            imagesIds: profile.imagesIds,
            miniImages: profile.miniImages
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const updatedProfile = collection.insertOne(profileToUpdate)
        return updatedProfile
    } catch (err) {
        loggerService.error('cannot update profile', err)
        throw err
    }
}


const add = async (profile: Profile) => {
    if (!profile.entityInfo.name) throw new Error('Missing required data')

    try {
        const profileToAdd = {
            relatedInfo: {
                profileImageId: profile.relatedInfo?.profileImageId,
                branchIds: profile.relatedInfo?.branchIds,
            },

            entityInfo: {
                name: {
                    display: profile.entityInfo.name,
                    he: {
                        private: profile.entityInfo.name.he?.private,
                        middle: profile.entityInfo.name.he?.middle,
                        family: profile.entityInfo.name.he?.family,
                        nickname: profile.entityInfo.name.he?.nickname,
                    }
                },

                ctgIds: profile.entityInfo.ctgIds || [],
                miniCategories: profile.entityInfo.miniCategories || [],

                item: {
                    dateOfActivity: {
                        isActive: profile.entityInfo.item?.dateOfActivity?.isActive,
                        activityDurations: profile.entityInfo.item?.dateOfActivity?.activityDurations
                    }
                },
                lifetime: {
                    born: {
                        date: profile.entityInfo.lifetime?.born,
                        uncomplete: profile.entityInfo.lifetime?.born?.uncomplete,
                        location: {
                            city: profile.entityInfo.lifetime?.born?.location.city,
                            region: profile.entityInfo.lifetime?.born?.location.region,
                            country: profile.entityInfo.lifetime?.born?.location.country,
                        }
                    },
                    died: {
                        date: profile.entityInfo.lifetime?.died?.date,
                        uncomplete: profile.entityInfo.lifetime?.died?.uncomplete,
                    }
                }
            },

            itemInfo: {
            },

            imagesIds: profile.imagesIds,
            miniImages: profile.miniImages
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedProfile = collection.insertOne(profileToAdd)
        return addedProfile
    } catch (err) {
        loggerService.error('cannot add profile', err)
        throw err
    }
}


export const profileService = {
    query,
    getById,
    update,
    add
}