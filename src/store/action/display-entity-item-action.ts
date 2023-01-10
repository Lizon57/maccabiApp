import { EntityItem } from "../../types/entity/entities/entity-item"

import { store } from "../store"


export const updateDisplayEntityItem = (editedItem: EntityItem) => {
    store.dispatch({ type: 'updateDisplayEntityItem', editedItem })
}