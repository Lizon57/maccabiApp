import { legacy_createStore as createStore, combineReducers } from 'redux'
// import { legacy_createStore as createStore, compose, combineReducers } from 'redux'

import { appLayoutReducer } from './reducer/app-layout-reducer'
import { appStateReducer } from './reducer/app-state-reducer'
import { displayEntityItemReducer } from './reducer/display-entity-item-reducer'
import { displayEntityReducer } from './reducer/display-entity-reducer'
import { saveEntityItemReducer } from './reducer/save-entity-item-reducer'
import { userState } from './reducer/user-reducer'


const rootReducer = combineReducers({
    appLayoutModule: appLayoutReducer,
    appStateModule: appStateReducer,
    userStateModule: userState,
    displayEntityModule: displayEntityReducer,
    displayEntityItemModule: displayEntityItemReducer,
    saveEntityItemModule: saveEntityItemReducer
})




export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>


// const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export const store = createStore(rootReducer, middleware)

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//     }
// }