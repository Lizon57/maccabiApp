import { ObjectId } from "mongodb"
import { User, UserWithoutId } from "../../models/user/user"
import { databaseService } from "../../services/database-service"
import { loggerService } from "../../services/logger-service"


const DB_NAME = 'user'

const query = async () => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const users = await collection.find().toArray()
        return users.map(user => {
            delete user.credential.password
            return user
        })
    } catch (err) {
        loggerService.error('cannot find users', err)
        throw err
    }
}


const getById = async (id: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const user = await collection.findOne({ _id: new ObjectId(id) }) as User
        delete user.credential.password
        return user
    } catch (err) {
        loggerService.error(`while finding user by id: ${id}`, err)
        throw err
    }
}


const update = async (user: User) => {
    try {
        const userToUpdate = {
            _id: new ObjectId(user._id),

            credential: {
                email: user.credential.email,
                password: user.credential.password
            }
        }

        const collection = await databaseService.getCollection(DB_NAME)
        await collection.updateOne({ _id: userToUpdate._id }, { $set: userToUpdate })
        return userToUpdate
    } catch (err) {
        loggerService.error(`cannot update user ${user._id}`, err)
        throw err
    }
}


const add = async (user: User | UserWithoutId) => {
    try {
        const existUser = await getByEmail(user.credential.email)
        if (existUser) throw new Error('Email already taken')

        const userToAdd = {
            credential: {
                email: user.credential.email,
            },

            client: {
                name: {
                    first: user.client.name.first,
                    last: user.client.name.last,
                    display: user.client.name.display,
                }
            },

            browseableBranchesIds: user.browseableBranchesIds,
            isGoogleUser: user.isGoogleUser || false
        }

        const collection = await databaseService.getCollection(DB_NAME)
        const addedUser = await collection.insertOne(userToAdd)
        return addedUser
    } catch (err) {
        loggerService.error('cannot add user', err)
        throw err
    }
}


const getByEmail = async (email: string) => {
    try {
        const collection = await databaseService.getCollection(DB_NAME)
        const user = await collection.findOne({ 'credential.email': email })
        if (!user) return

        return user
    } catch (err) {
        loggerService.error(`while finding user by email: ${email}`, err)
        throw err
    }
}


const getEmptyUser = () => {
    return {
        credential: {
            email: '',
            password: ''
        },

        client: {
            name: {
                first: '',
                last: '',
                display: '',
            }
        },

        browseableBranchesIds: [] as string[],

        permisionGroup: ''
    }
}


export const userService = {
    query,
    getById,
    update,
    add,
    getByEmail,
    getEmptyUser
}