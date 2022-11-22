import { configureStore } from "@reduxjs/toolkit"

import appLayoutSlicer from "./slicer/app-layout-slicer"
import appStateSlicer from "./slicer/app-state-slicer"
import userSlicer from "./slicer/user-slicer"
import displayEntitySlicer from "./slicer/display-entity-slicer"
import entitySaveSlicer from "./slicer/entity-save-slicer"


export const store = configureStore({
    reducer: {
        appLayout: appLayoutSlicer,
        appState: appStateSlicer,
        userModule: userSlicer,
        displayEntityModule: displayEntitySlicer,
        entitySaveModule: entitySaveSlicer
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch