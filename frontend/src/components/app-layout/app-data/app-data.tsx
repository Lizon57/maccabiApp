import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { AppMessageList } from "./app-message/app-message-list"
import { ScrollToTop } from "./scroll-to-top/scroll-to-top"
import { Share } from "./share/share"


export const AppData = () => {
    return (
        <AppAdditionalContent isBlockEnd>
            <aside className="app-layout--app-data__container">
                <AppMessageList />
                <Share />
                <ScrollToTop />
            </aside>
        </AppAdditionalContent>
    )
}