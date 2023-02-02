import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { setAppScreenZIndex } from "../../../store/action/app-layout-action"


export const AppScreen = () => {
    const { appScreenZIndex } = useSelector((state: RootState) => state.appLayoutModule)

    const onCloseScreen = () => setAppScreenZIndex(0)

    const style = { zIndex: appScreenZIndex }


    return (
        <div
            className={"app-layout--app-screen__container" + (appScreenZIndex ? ' active' : '')}
            style={style}
            onClick={onCloseScreen}
        >
        </div>
    )
}