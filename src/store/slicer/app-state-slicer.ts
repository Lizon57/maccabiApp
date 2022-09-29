import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { appMessageType } from "../../types/app-message"


interface AppState {
    appMessages: appMessageType[]
}


const initialState: AppState = {
    appMessages: []
}

export const appStateSlicer = createSlice({
    name: 'app-layout',
    initialState,
    reducers: {
        insertAppMessage: (state, action: PayloadAction<appMessageType>) => {
            state.appMessages.push(action.payload)
        },

        deleteAppMessage: (state, action: PayloadAction<string>) => {
            state.appMessages = state.appMessages.filter(message => message.id !== action.payload)
        }
    }
})


export const { insertAppMessage, deleteAppMessage } = appStateSlicer.actions


export default appStateSlicer.reducer