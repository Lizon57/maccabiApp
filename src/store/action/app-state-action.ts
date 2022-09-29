import { useStoreDispatch } from "../../hooks/store/use-store-dispatch"
import { appMessageType } from "../../types/app-message"

import { deleteAppMessage, insertAppMessage } from "../slicer/app-state-slicer"


export const AppMessageAction = (message: appMessageType) => {
    const dispatch = useStoreDispatch()
    dispatch(insertAppMessage(message))

    setTimeout(() => {
        dispatch(deleteAppMessage(message.id))
    }, 5000)
}