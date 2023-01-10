import { store } from "../store"


export const setAppFooterClientHeight = (height: number) => {
    store.dispatch({ type: 'setAppFooterClientHeight', height })
}


export const setAppScreenZIndex = (zIndex: number) => {
    store.dispatch({ type: 'setAppScreenZIndex', zIndex })
}


export const setPageDataCmpType = (pageDataCmpType: string) => {
    store.dispatch({ type: 'setPageDataCmpType', pageDataCmpType })
}