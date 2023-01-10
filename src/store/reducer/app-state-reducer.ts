import { AppMessage } from "../../types/app/app-message"


const initialState: AppStateReducer = {
    appMessages: []
}


export const appStateReducer = (state = initialState, action: Action) => {
    let appMessages: AppMessage[] = []

    switch (action.type) {
        case 'insertAppMessage':
            return { ...state, appMessages: [...state.appMessages, action.message] }

        case 'deleteAppMessage':
            appMessages = state.appMessages.filter(message => message.id !== action.removedAppMessageId)
            return { ...state, appMessages }

        default:
            return state
    }
}


type AppStateReducer = {
    appMessages: AppMessage[]
}


type Action = {
    [key: string]: any
}