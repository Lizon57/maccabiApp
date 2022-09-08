import { RenderByDeviceWidth } from "../../common/render-by/render-by-device-width"
import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { AppMessageList } from "./app-message/app-message-list"
import { ScrollToTop } from "./scroll-to-top/scroll-to-top"


export const AppData = () => {
    return (
        <AppAdditionalContent isBlockEnd={true}>
            <div className="app-layout--app-data__container">
                <RenderByDeviceWidth minDeviceWide="wide">
                    <AppMessageList />
                </RenderByDeviceWidth>

                <ScrollToTop />
            </div>
        </AppAdditionalContent>
    )
}