import { User } from "../../models/interfaces/user/user"
import { store } from "../store"


export const login = (user: User) => {
    store.dispatch({type: 'setUser', user})
}

export const logout = () => {
    store.dispatch({ type: 'clearUser' })
}

export const setActiveBranchesIds = (browseableBranchesIds: string[]) => {
    store.dispatch({ type: 'setActiveBranchesIds', browseableBranchesIds })
}