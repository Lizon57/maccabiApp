import { useStoreDispatch } from "../use-store-dispatch"
import { deleteAppMessage, insertAppMessage } from "../../../store/slicer/app-state-slicer"

import { AppMessage } from "../../../types/app/app-message"

import { makeId } from "../../../services/util/make-id"


export const useAppMessage = () => {
    const dispatch = useStoreDispatch()

    const addMessage = (message: AppMessage) => {
        message.id = makeId()
        dispatch(insertAppMessage(message))

        setTimeout(() => {
            dispatch(deleteAppMessage(message.id))
        }, 5000)
    }

    return addMessage
}