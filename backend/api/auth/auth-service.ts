import dotenv from 'dotenv'
import Cryptr from "cryptr"
import bcrypt from "bcrypt"
import { userService } from "../user/user-service"
import { loggerService } from "../../services/logger-service"
import { User } from "../../models/user/user"

dotenv.config()

const cryptr = new Cryptr(process.env.BCRYPT_MYSTERIOUS)
const saltRounds = 10


const login = async (email: string, password: string) => {
    loggerService.debug(`auth.service - login with email: ${email}`)

    const user = await userService.getByEmail(email) as User
    if (!user) return Promise.reject('Invalid email')

    if (!user.credential.password) return Promise.reject('Google user')

    const match = await bcrypt.compare(password, user.credential.password)
    if (!match) return Promise.reject('Invalid password')

    delete user.credential.password
    user._id = user._id.toString()
    return user
}


async function signup(user: User) {
    loggerService.debug(`auth.service - signup with email: ${user.credential.email}`)
    if (!user.credential.email || (!user.isGoogleUser && !user.credential.password)) return Promise.reject('Missing required signup information')

    if (user.isGoogleUser) {
        const insertedUser = await userService.add(user)
        user._id = insertedUser.insertedId.toString()
        return user
    } else {
        user.credential.password = await bcrypt.hash(user.credential.password, saltRounds)
        return userService.add(user)
    }
}


const createLoginToken = (user: User) => {
    const userInfo = { _id: user._id, email: user.credential.email, permisionGroup: (user.permisionGroup) }
    return cryptr.encrypt(JSON.stringify(userInfo))
}


const validateToken = (loginToken: string) => {
    try {
        const json = cryptr.decrypt(loginToken)
        return JSON.parse(json)
    } catch (err) {
        console.log('Invalid login token')
    }
    return null
}


export const authService = {
    signup,
    login,
    createLoginToken,
    validateToken
}