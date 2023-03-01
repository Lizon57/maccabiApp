import { userService } from "../user/user-service"
import { loggerService } from "../../services/logger-service"
import bcrypt from "bcrypt"
import { User } from "../../models/user/user"
// const Cryptr = require('cryptr')
import Cryptr from "cryptr"
const cryptr = new Cryptr(process.env.mysterious || 'maccabipedia')


const saltRounds = 10


const login = async (email: string, password: string) => {
    loggerService.debug(`auth.service - login with email: ${email}`)

    const user = await userService.getByEmail(email) as User
    if (!user) return Promise.reject('Invalid email')

    const match = bcrypt.compare(password, user.credential.password)
    if (!match) return Promise.reject('Invalid password')

    delete user.credential.password
    user._id = user._id.toString()
    return user
}


async function signup(user: User) {
    loggerService.debug(`auth.service - signup with email: ${user.credential.email}`)
    if (!user.credential.email || !user.credential.password) return Promise.reject('Missing required signup information')

    const isUserExist = await userService.getByEmail(user.credential.email)
    if (isUserExist) return Promise.reject('Email already taken')

    user.credential.password = await bcrypt.hash(user.credential.password, saltRounds)
    return userService.add(user)
}


const getLoginToken = (user: User) => {
    const userInfo = { _id: user._id, email: user.credential.email, permisionGroup: (user.permisionGroup) }
    return cryptr.encrypt(JSON.stringify(userInfo))
}


const validateToken = (loginToken: any) => {
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
    getLoginToken,
    validateToken
}