import { useStoreSelector } from "../../../../hooks/store/use-store-selector"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { MainTitle } from "../../../common/main-title/main-title"
import { AppMessagePreview } from "./app-message-preview"


export const AppMessageList = () => {
    const { appMessages } = useStoreSelector(state => state.appState)
    const title = (appMessages.length > 1) ? 'הודעות מערכת' : 'הודעת מערכת'


    if (!appMessages.length) return null

    return (
        <section className="app-data--message__list-container">
            <RenderByDeviceWidth minDeviceWide="wide">
                <MainTitle text={title} />
            </RenderByDeviceWidth>

            {appMessages.map(message => <AppMessagePreview key={message.id} message={message} />)}
        </section>
    )
}