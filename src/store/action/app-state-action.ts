import { store } from "../store"

import { makeId } from "../../services/util/make-id"

import { AppMessage } from "../../types/app/app-message"


export const insertAppMessage = (message: AppMessage) => {
    if (!message.id) message.id = makeId()
    store.dispatch({ type: 'insertAppMessage', message })

    setTimeout(() => {
        store.dispatch({ type: 'deleteAppMessage', removedAppMessageId: message.id })
    }, 5000)
}