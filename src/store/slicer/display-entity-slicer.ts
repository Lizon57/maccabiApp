import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"

import { EntityItem } from "../../types/entity/entities/entity-item"


interface DisplayEntitySlicer {
    item: EntityItem
}


const initialState: DisplayEntitySlicer = {
    item: emptyEntityItemService.get('')
}


export const displayEntitySlicer = createSlice({
    name: 'display-entity-slicer',
    initialState,
    reducers: {
        clearItem: (state) => {
            state.item = emptyEntityItemService.get('')
        },

        setItem: (state, action: PayloadAction<EntityItem>) => {
            state.item = action.payload
        },
    }
})


export const { clearItem, setItem } = displayEntitySlicer.actions


export default displayEntitySlicer.reducer