import { loggerService } from "../../services/logger-service"
import { profileService } from "./profile-service"


const get = async (req: any, res: any) => {
    loggerService.debug('Getting profiles')

    try {
        const profiles = await profileService.query()
        res.json(profiles)
    } catch (err) {
        loggerService.error('Failed to get profiles', err)
        res.status(500).send({ err: 'Failed to get profiles' })
    }
}

const getById = async (req: any, res: any) => {
    loggerService.debug('Getting profile by id')

    try {
        const id = req.params.id
        const profile = await profileService.getById(id)
        res.json(profile)
    } catch (err) {
        loggerService.error('Failed to get profile', err)
        res.status(500).send({ err: 'Failed to get profile' })
    }
}


const save = async (req: any, res: any) => {
    try {
        const profile = req.body
        if (profile._id) {
            const savedProfile = await profileService.update(profile)
            res.json(savedProfile)
        } else {
            const addedProfile = await profileService.add(profile)
            res.json(addedProfile)
        }
    } catch (err) {
        loggerService.error('Failed to save profile', err)
        res.status(500).send({ err: 'Failed to save profile' })
    }
}


const getMiniProfilesByPharse = async (req: any, res: any) => {
    loggerService.debug('Getting mini profiles by pharse')

    try {
        const profiles = await profileService.getMiniProfilesByPharse(req.query.pharse)
        res.json(profiles)
    } catch (err) {
        loggerService.error('Failed to get mini profiles by pharse', err)
        res.status(500).send({ err: 'Failed to get mini profiles by pharse' })
    }
}


export const profileController = {
    get,
    getById,
    save,
    getMiniProfilesByPharse
}
