import { useSelector } from "react-redux"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { MainTitle } from "../../../common/main-title/main-title"
import { AppMessagePreview } from "./app-message-preview"
import { RootState } from "../../../../store/store"


export const AppMessageList = () => {
    const { appMessages } = useSelector((state: RootState) => state.appStateModule)


    if (!appMessages.length) return null

    return (
        <section className="app-data--message__list-container">
            <RenderByDeviceWidth minDeviceWide="wide">
                <MainTitle text="חשוב שתדע" />
            </RenderByDeviceWidth>

            {appMessages.map(message => <AppMessagePreview key={message.id} message={message} />)}
        </section>
    )
}