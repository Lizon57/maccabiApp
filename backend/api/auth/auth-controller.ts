import { OAuth2Client } from 'google-auth-library'
import jwt_decode from 'jwt-decode'
import { authService } from "./auth-service"
import { userService } from "../user/user-service"
import { loggerService } from "../../services/logger-service"
import { makeId } from "../../services/util/make-id"
import { User } from '../../models/user/user'
import { GoogleAuthResponse } from "../../models/user/google-auth-response"
import { BRANCHES } from "../../data/branches"

// const COOKIE_MAX_AGE = 1000
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 21

const login = async (req: any, res: any) => {
    const { email, password } = req.body

    try {
        const user = await authService.login(email, password)
        const loginToken = authService.createLoginToken(user)
        loggerService.info('User login: ', user.credential.email)

        const refreshToken = makeId(35)
        res.cookie('refreshToken', refreshToken, { sameSite: 'None', secure: true })
        res.cookie('loginToken', loginToken, { secure: true, maxAge: COOKIE_MAX_AGE })
        res.json(user)
    } catch (err) {
        loggerService.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}


const signup = async (req: any, res: any) => {
    try {
        const user = req.body
        await authService.signup(user)
        loggerService.debug(`auth.route - new account created: ${user.credential.email}`)
        const loggedUser = await authService.login(user.credential.email, user.credential.password)
        loggerService.info('User login:', loggedUser)
        delete loggedUser.credential.password
        const loginToken = authService.createLoginToken(loggedUser)
        const refreshToken = makeId(35)
        res.cookie('refreshToken', refreshToken, { sameSite: 'None', secure: true })
        res.cookie('loginToken', loginToken, { secure: true, maxAge: COOKIE_MAX_AGE })
        res.json(loggedUser)
    } catch (err) {
        loggerService.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}


const logout = (req: any, res: any) => {
    try {
        res.clearCookie('loginToken')
        res.clearCookie('refreshToken')
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        loggerService.error('Failed to logout ' + err)
        res.status(500).send({ err: 'Failed to logout' })
    }
}


const googleSignupLogin = async (req: any, res: any) => {
    try {
        const oAuth2Client = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            'postmessage',
        )

        const { tokens: { id_token: idToken, refresh_token: refreshToken } } = await oAuth2Client.getToken(req.body.code)
        const decodedIdToken: GoogleAuthResponse = jwt_decode(idToken)
        let existUser = await userService.getByEmail(decodedIdToken.email) as User

        if (existUser?._id) delete existUser.credential.password
        else {
            const newUser = userService.getEmptyUser() as User
            newUser.credential.email = decodedIdToken.email
            newUser.client.name.first = decodedIdToken.given_name || ''
            newUser.client.name.last = decodedIdToken.family_name || ''
            newUser.client.name.display = `${decodedIdToken.given_name || ''} ${decodedIdToken.family_name || ''}`
            newUser.browseableBranchesIds = BRANCHES.map(branch => branch.id)
            newUser.isGoogleUser = true
            const addedUser = await authService.signup(newUser) as User
            existUser = { ...addedUser }
            loggerService.info('User signup with google: ', newUser.credential.email)
        }

        const loginToken = authService.createLoginToken(existUser)
        loggerService.info('User login with google: ', existUser.credential.email)
        res.cookie('refreshToken', refreshToken, { sameSite: 'None', secure: true })
        res.cookie('loginToken', loginToken, { secure: true, maxAge: COOKIE_MAX_AGE })
        res.json(existUser)
    } catch (err) {
        loggerService.error('Failed to signup / login with google ' + err)
        res.status(500).send({ err: 'Failed to login with google' })
    }
}


export const authController = {
    login,
    signup,
    logout,
    googleSignupLogin
}