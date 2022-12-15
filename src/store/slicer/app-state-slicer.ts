import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppMessage } from "../../types/app-message"


interface AppState {
    appMessages: AppMessage[]
}


const initialState: AppState = {
    appMessages: []
}

export const appStateSlicer = createSlice({
    name: 'app-state-slicer',
    initialState,
    reducers: {
        insertAppMessage: (state, action: PayloadAction<AppMessage>) => {
            state.appMessages.push(action.payload)
        },

        deleteAppMessage: (state, action: PayloadAction<string | undefined>) => {
            state.appMessages = state.appMessages.filter(message => message.id !== action.payload)
        }
    }
})


export const { insertAppMessage, deleteAppMessage } = appStateSlicer.actions


export default appStateSlicer.reducer