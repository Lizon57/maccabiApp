import { BRANCHES } from "../../data/app/supports-branches"

import { makeId } from "../../services/util/make-id"

import { User } from "../../types/user"


const initialState: UserReducer = {
    user: _getDemoUser()
}


export const userState = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'setUser':
            return { ...state, user: { ...action.user } }

        case 'setActiveBranchesIds':
            return { ...state, user: { ...state.user, browseableBranchesIds: action.browseableBranchesIds } }

        default:
            return state
    }
}


function _getDemoUser() {
    return {
        _id: makeId(),
        browseableBranchesIds: BRANCHES.map(branch => branch._id)
    }
}


type UserReducer = {
    user: User
}


type Action = {
    [key: string]: any
}