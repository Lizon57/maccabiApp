import { Entity } from "../../models/interfaces/entities/entity"
import { store } from "../store"


export const updateDisplayEntity = (entity: Entity) => {
    store.dispatch({ type: 'updateDisplayEntity', entity })
}


export const clearDisplayEntity = () => {
    store.dispatch({ type: 'clearDisplayEntity' })
}