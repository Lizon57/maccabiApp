import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AppLayoutState {
    appFooterClientHeight: number
    appScreenZIndex: number
    pageDataCmpType: string
}


const initialState: AppLayoutState = {
    appFooterClientHeight: 0,
    appScreenZIndex: 0,
    pageDataCmpType: 'social-network-preview'
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

        setPageDataCmpType: (state, action: PayloadAction<string>) => {
            state.pageDataCmpType = action.payload
        }
    }
})


export const { setAppFooterClientHeight, setAppScreenZIndex, setPageDataCmpType } = appLayoutSlicer.actions


export default appLayoutSlicer.reducer