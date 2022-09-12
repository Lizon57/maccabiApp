import { useStoreSelector } from "../../../hooks/store/use-store-selector"

export const AppScreen = () => {
    const { appScreenZIndex } = useStoreSelector(state => state.appLayout)
    const STYLE = { zIndex: appScreenZIndex }

    return (
        appScreenZIndex
            ? <div className="app-layout--app-screen__container" style={STYLE}>
            </div>

            : null
    )
}