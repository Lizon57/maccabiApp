import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"

import { EntityItem } from "../../types/entity/entities/entity-item"


interface EntitySaveSlicer {
    item: EntityItem
}


const initialState: EntitySaveSlicer = {
    item: emptyEntityItemService.get('')
}


export const entitySaveSlicer = createSlice({
    name: 'entity-save-slicer',
    initialState,
    reducers: {
        setEmptyItem: (state) => {
            state.item = emptyEntityItemService.get('')
        },

        updateItem: (state, action: PayloadAction<EntityItem>) => {
            const editedItem = {
                ...state.item,
                ...action.payload
            }
            state.item = editedItem
        },
    }
})


export const { setEmptyItem, updateItem } = entitySaveSlicer.actions


export default entitySaveSlicer.reducer