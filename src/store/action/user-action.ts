import { store } from "../store"


export const setActiveBranchesIds = (browseableBranchesIds: string[]) => {
    store.dispatch({ type: 'setActiveBranchesIds', browseableBranchesIds })
}