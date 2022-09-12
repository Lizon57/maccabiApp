import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    appFooterClientHeight: number,
    appScreenZIndex: number
}


const initialState: AppState = {
    appFooterClientHeight: 0,
    appScreenZIndex: 0
}

export const appSlicer = createSlice({
    name: 'app-layout',
    initialState,
    reducers: {
        setAppFooterClientHeight: (state, action: PayloadAction<number>) => {
            state.appFooterClientHeight = action.payload
        },

        setAppScreenZIndex: (state, action: PayloadAction<number>) => {
            state.appScreenZIndex = action.payload
        },
    }
})


export const { setAppFooterClientHeight, setAppScreenZIndex } = appSlicer.actions


export default appSlicer.reducer