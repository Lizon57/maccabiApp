import { makeId } from "../services/util/make-id"

import { LoginSignup } from "../pages/user/login-signup"


export const userRoutes = [
    {
        id: makeId(),
        path: `login-signup`,
        element: LoginSignup
    },
]