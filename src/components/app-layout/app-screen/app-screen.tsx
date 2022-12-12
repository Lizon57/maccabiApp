import { useStoreSelector } from "../../../hooks/store/use-store-selector"

export const AppScreen = () => {
    const { appScreenZIndex } = useStoreSelector(state => state.appLayout)
    const style = { zIndex: appScreenZIndex }

    return (
        <div
            className={"app-layout--app-screen__container" + (appScreenZIndex ? ' active' : '')}
            style={style}>
        </div>
    )
}