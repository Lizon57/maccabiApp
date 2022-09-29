import { makeId } from "../../../../services/util/make-id"

import { useStoreSelector } from "../../../../hooks/store/use-store-selector"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { MainTitle } from "../../../common/main-title/main-title"
import { AppMessagePreview } from "./app-message-preview"


export const AppMessageList = () => {
    const { appMessages } = useStoreSelector(state => state.appState)

    return (
        appMessages.length
            ? <div className="app-data--message__list-container">
                <RenderByDeviceWidth minDeviceWide="wide">
                    <MainTitle text={(appMessages.length > 1) ? 'הודעות מערכת' : 'הודעת מערכת'} />
                </RenderByDeviceWidth>

                {appMessages.map((message) => {
                    return <AppMessagePreview key={message.id} message={message} />
                })}
            </div>
            : null
    )
}