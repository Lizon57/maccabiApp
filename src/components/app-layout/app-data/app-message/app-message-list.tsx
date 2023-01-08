import { useStoreSelector } from "../../../../hooks/store/use-store-selector"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { MainTitle } from "../../../common/main-title/main-title"
import { AppMessagePreview } from "./app-message-preview"


export const AppMessageList = () => {
    const { appMessages } = useStoreSelector(state => state.appState)


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