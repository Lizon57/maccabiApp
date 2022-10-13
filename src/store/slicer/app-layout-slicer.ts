import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppLayoutState {
    appFooterClientHeight: number,
    appScreenZIndex: number
}


const initialState: AppLayoutState = {
    appFooterClientHeight: 0,
    appScreenZIndex: 0
}

export const appLayoutSlicer = createSlice({
    name: 'app-layout-slicer',
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


export const { setAppFooterClientHeight, setAppScreenZIndex } = appLayoutSlicer.actions


export default appLayoutSlicer.reducer