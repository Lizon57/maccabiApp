// import { makeId } from "../../../services/util/make-id"
// import { AppMessageAction } from "../../../store/action/app-state-action"

import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { AppMessageList } from "./app-message/app-message-list"
import { ScrollToTop } from "./scroll-to-top/scroll-to-top"


export const AppData = () => {
    // AppMessageAction(
    //     { id: makeId(), text: 'עריכת הדף "אבי נמני" בוצעה בהצלחה', title: 'עריכה בוצעה בהצלחה', type: 'success' }
    // )
    // AppMessageAction(
    //     { id: makeId(), text: 'עריכת הדף "אבי נמני" נכשלה', title: 'עריכה נכשלה', type: 'fail' }
    // )
    // AppMessageAction(
    //     { id: makeId(), text: 'התקבלה הודעה פרטית חדשה מאורן המתעפץ', title: 'הודעה פרטית חדשה', type: 'message' }
    // )


    return (
        <AppAdditionalContent isBlockEnd={true}>
            <div className="app-layout--app-data__container">
                <AppMessageList />

                <ScrollToTop />
            </div>
        </AppAdditionalContent>
    )
}