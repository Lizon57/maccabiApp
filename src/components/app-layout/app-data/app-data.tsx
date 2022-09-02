import { RenderByDeviceWidth } from "../../common/render-by/render-by-device-width"
import { AppMessageList } from "./app-message/app-message-list"

export const AppData = () => {
    return (
        <aside className="app-layout--app-data__aside-container">
            <RenderByDeviceWidth minDeviceWide="wide">
                <AppMessageList />
            </RenderByDeviceWidth>
        </aside>
    )
}