import { configureStore } from "@reduxjs/toolkit"

import appLayoutSlicer from "./slicer/app-layout-slicer"
import appStateSlicer from "./slicer/app-state-slicer"
import entitySaveSlicer from "./slicer/entity-save-slicer"
import userSlicer from "./slicer/user-slicer"


export const store = configureStore({
    reducer: {
        appLayout: appLayoutSlicer,
        appState: appStateSlicer,
        userModule: userSlicer,
        entitySaveModule: entitySaveSlicer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch