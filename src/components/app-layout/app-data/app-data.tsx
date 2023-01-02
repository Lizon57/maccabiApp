import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { AppMessageList } from "./app-message/app-message-list"
import { ScrollToTop } from "./scroll-to-top/scroll-to-top"


export const AppData = () => {
    return (
        <AppAdditionalContent isBlockEnd>
            <aside className="app-layout--app-data__container">
                <AppMessageList />

                <ScrollToTop />
            </aside>
        </AppAdditionalContent>
    )
}