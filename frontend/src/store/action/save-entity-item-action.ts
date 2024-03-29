import { store } from "../store"
import { emptyEntityItemService } from "../../services/entities/empty-entity-item-service"
import { EntityItem } from "../../models/types/entities/item/entity-item"



export const setSaveEntityItem = (item: EntityItem | null) => {
    if (!item) item = emptyEntityItemService.get('')
    store.dispatch({ type: 'setSaveEntityItem', item })
}