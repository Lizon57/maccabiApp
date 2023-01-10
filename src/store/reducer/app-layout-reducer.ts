const initialState: AppLayoutReducer = {
    appFooterClientHeight: 0,
    appScreenZIndex: 0,
    pageDataCmpType: 'social-network-preview'
}


export const appLayoutReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'setAppFooterClientHeight':
            return { ...state, appFooterClientHeight: action.height }

        case 'setAppScreenZIndex':
            return { ...state, appScreenZIndex: action.zIndex }

        case 'setPageDataCmpType':
            return { ...state, pageDataCmpType: action.pageDataCmpType }

        default:
            return state
    }
}


export type AppLayoutReducer = {
    appFooterClientHeight: number
    appScreenZIndex: number
    pageDataCmpType: string
}


type Action = {
    [key: string]: any
}