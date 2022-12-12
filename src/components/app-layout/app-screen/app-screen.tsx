import { useStoreSelector } from "../../../hooks/store/use-store-selector"
import { useStoreDispatch } from "../../../hooks/store/use-store-dispatch"
import { setAppScreenZIndex } from "../../../store/slicer/app-layout-slicer"


export const AppScreen = () => {
    const { appScreenZIndex } = useStoreSelector(state => state.appLayout)
    const dispatch = useStoreDispatch()

    const style = { zIndex: appScreenZIndex }


    const onCloseScreen = () => {
        dispatch(setAppScreenZIndex(0))
    }


    return (
        <div
            className={"app-layout--app-screen__container" + (appScreenZIndex ? ' active' : '')}
            style={style}
            onClick={onCloseScreen}
        >
        </div>
    )
}