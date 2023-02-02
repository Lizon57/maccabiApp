import { BRANCHES } from "../../data/app/supports-branches"

import { User } from "../../models/interfaces/user/user"
import { LocalUser } from "../../models/interfaces/user/local-user"
import { userService } from "../../services/user/user-service"


const initialState: UserReducer = {
    user: userService.getLoggedinUser() || _getLocalUser()
}


export const userState = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'setUser':
            return { ...state, user: { ...action.user, user: action.user } }

        case 'clearUser':
            return { ...state, user: _getLocalUser() }

        case 'setActiveBranchesIds':
            return { ...state, user: { ...state.user, browseableBranchesIds: action.browseableBranchesIds } }

        default:
            return state
    }
}


function _getLocalUser() {
    return {
        browseableBranchesIds: BRANCHES.map(branch => branch._id)
    }
}


type UserReducer = {
    user: User | LocalUser
}


type Action = {
    [key: string]: any
}