import { EntityItem } from "../../models/types/entities/item/entity-item"
import { store } from "../store"


export const updateDisplayEntityItem = (editedItem: EntityItem) => {
    store.dispatch({ type: 'updateDisplayEntityItem', editedItem })
}


export const clearDisplayEntityItem = () => {
    store.dispatch({ type: 'clearDisplayEntityItem' })
}