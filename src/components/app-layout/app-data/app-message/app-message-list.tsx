import { makeId } from "../../../../services/util/make-id"
import { AppMessagePreview } from "./app-message-preview"

export const AppMessageList = () => {
    return (
        DATA.length
            ? <div className="app-data--message__list-container">
                <div className="list-title">{(DATA.length > 1) ? 'הודעות מערכת' : 'הודעת מערכת'}</div>

                {DATA.map((message) => {
                    return <AppMessagePreview key={message.id} message={message} />
                })}
            </div>
            : null
    )
}


const DATA = [
    {
        id: makeId(),
        type: 'success',
        title: 'עריכה בוצעה בהצלחה',
        text: 'הדף "אבי נמני" נערך בהצלחה.'
    },

    {
        id: makeId(),
        type: 'danger',
        title: 'עריכה נכשלה',
        text: 'כשל בעריכת הדף "אבי נמני", אנא נסה שנית.'
    },

    {
        id: makeId(),
        type: 'direct_message',
        title: 'התקבלה הודעה פרטית',
        text: 'קיבלת הודעה פרטית מ-roeeba.'
    },
]