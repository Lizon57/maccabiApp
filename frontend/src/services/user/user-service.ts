import { httpService } from "../http-service"

import { errorHandler } from "../util/error-handler"
import { getCookieValueByName } from "../util/get-cookie-value-by-name"
import { makeId } from "../util/make-id"


export const STORAGE_KEY_LOGGEDIN_USER = 'loggedUser'

const signup = async (credential: Credential) => {
    try {
        const newUser = _createUser(credential)
        const user = await httpService.post('auth/signup', newUser)
        localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        return errorHandler(err, true)
    }
}

const login = async (credential: Credential) => {
    try {
        const user = await httpService.post('auth/login', credential)
        if (!user) throw new Error('פרטי התחברות שגויים, אנא נסה שנית')
        localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        return errorHandler(err, true)
    }
}

const logout = async () => {
    try {
        await httpService.post('auth/logout')
        localStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    } catch (err) {
        throw err
    }
}


const getLoggedinUser = () => {
    const loginToken = getCookieValueByName('loginToken')
    if (!loginToken) return

    const loggedUser = localStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    if (!loggedUser) return

    return JSON.parse(loggedUser)
}


export const googleSignupLogin = async (tokenCode: string) => {
    try {
        const user = await httpService.post('auth/googleSignupLogin', { code: tokenCode })
        if (!user) throw new Error('פרטי התחברות שגויים, אנא נסה שנית')
        localStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        throw err
    }
}


const _createUser = (credential: Credential) => ({
    _id: makeId(),
    credential: {
        email: credential.email,
        password: credential.password
    },
    client: {
        name: {
            first: '',
            last: '',
            display: '',
        }
    },
    browseableBranchesIds: ['branchId00001', 'branchId00002', 'branchId00003']
})


export const userService = {
    signup,
    login,
    logout,
    getLoggedinUser,
    googleSignupLogin
}


type Credential = {
    email: string
    password: string
}