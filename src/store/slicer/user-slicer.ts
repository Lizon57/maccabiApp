import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BRANCHES } from "../../data/app/supports-branches"
import { makeId } from "../../services/util/make-id"

import { User } from "../../types/user"


interface AppState {
    user: User
}


const initialState: AppState = {
    user: _getDemoUser()
}

export const userSlicer = createSlice({
    name: 'user-slicer',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },

        setActiveBranchesIds: (state, action: PayloadAction<string[]>) => {
            state.user.browseableBranchesIds = action.payload
        }
    }
})


function _getDemoUser() {
    return {
        _id: makeId(),
        browseableBranchesIds: BRANCHES.map(branch => branch._id)
    }
}


export const { setUser, setActiveBranchesIds } = userSlicer.actions


export default userSlicer.reducer
