import { RenderByDeviceWidth } from "../../common/render-by/render-by-device-width"
import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { AppMessageList } from "./app-message/app-message-list"


export const AppData = () => {
    return (
        <AppAdditionalContent isBlockEnd={true}>
            <RenderByDeviceWidth minDeviceWide="wide">
                <AppMessageList />
            </RenderByDeviceWidth>
        </AppAdditionalContent>
    )
}