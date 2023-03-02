import { lazy } from "react"
import { makeId } from "../services/util/make-id"

const LoginSignup = lazy(() => import('../pages/user/login-signup'))


export const userRoutes = [
    {
        id: makeId(),
        path: `login-signup`,
        element: LoginSignup
    },
]