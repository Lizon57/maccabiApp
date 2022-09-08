import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppState {
    appFooterClientHeight: number
}


const initialState: AppState = {
    appFooterClientHeight: 0,
}

export const appSlicer = createSlice({
    name: 'app-layout',
    initialState,
    reducers: {
        setAppFooterClientHeight: (state, action: PayloadAction<number>) => {
            state.appFooterClientHeight = action.payload
        }
    }
})


export const { setAppFooterClientHeight, } = appSlicer.actions


export default appSlicer.reducer