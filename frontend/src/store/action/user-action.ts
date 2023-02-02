import { store } from "../store"
import { insertAppMessage } from "./app-state-action"
import { User } from "../../models/interfaces/user/user"
import { userService } from "../../services/user/user-service"


export const login = (user: User) => {
    store.dispatch({ type: 'setUser', user })
}


export const logout = () => {
    userService.logout()
    store.dispatch({ type: 'clearUser' })
    insertAppMessage({ text: 'נורא הצטערנו לשמוע את החדשות הנוראיות. מקווים שנתראה שוב בקרוב.', title: 'התנתקת מהמערכת', type: 'fail' })
}


export const setActiveBranchesIds = (browseableBranchesIds: string[]) => {
    store.dispatch({ type: 'setActiveBranchesIds', browseableBranchesIds })
}