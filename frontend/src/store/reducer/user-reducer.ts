import { BRANCHES } from "../../data/app/supports-branches"

import { makeId } from "../../services/util/make-id"

import { User } from "../../models/interfaces/user/user"
import { LocalUser } from "../../models/interfaces/user/local-user"


const initialState: UserReducer = {
    user: _getDemoUser()
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


function _getDemoUser() {
    return {
        _id: makeId(),

        credentials: {
            email: 'orenyaniv90@gmail.com',
            password: '123456',
        },

        client: {
            name: {
                first: 'אורן',
                last: 'יניב',
                display: 'אורן המתעפץ',
            }
        },

        browseableBranchesIds: BRANCHES.map(branch => branch._id)
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