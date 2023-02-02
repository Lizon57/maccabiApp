import { httpService } from "../http-service"
import { makeId } from "../util/make-id"


const STORAGE_KEY_LOGGEDIN_USER = 'loggedUser'


const signup = async (credential: Credential) => {
    try {
        const newUser = _createUser(credential)
        const user = await httpService.post('auth/signup', newUser)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        throw err
    }
}

const login = async (credential: Credential) => {
    try {
        const user = await httpService.post('auth/login', credential)
        if (!user) throw new Error('פרטי התחברות שגויים, אנא נסה שנית')
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    } catch (err) {
        throw err
    }
}

const logout = async () => {
    try {
        await httpService.post('auth/logout')
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    } catch (err) {
        throw err
    }
}


const getLoggedinUser = () => {
    const loggedUser = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    if (!loggedUser) return
    return JSON.parse(loggedUser)
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
    getLoggedinUser
}


type Credential = {
    email: string
    password: string
}