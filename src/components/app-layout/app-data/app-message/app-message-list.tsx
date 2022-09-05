import { makeId } from "../../../../services/util/make-id"

import { MainTitle } from "../../../common/main-title/main-title"
import { AppMessagePreview } from "./app-message-preview"


export const AppMessageList = () => {
    return (
        DATA.length
            ? <div className="app-data--message__list-container">
                <MainTitle text={(DATA.length > 1) ? 'הודעות מערכת' : 'הודעת מערכת'} />

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
        text: 'הדף "אבי נמני" נערך בהצלחה. איזה כיף שזה קורה זה לא להאמין וווא וואו וואו'
    },

    {
        id: makeId(),
        type: 'danger',
        title: 'עריכה נכשלה',
        text: 'כשל בעריכת הדף "אבי נמני", אנא נסה שנית. אין לנו מושג למה, אתה יכול לנסות שוב ואתה יכול לוותר על העסק, מה שבא לך, בחירה שלך. בוא ננסה להכניס פה עוד איזה שורה וחצי ככה בפנאן ואפילו משהו ממש מוגזם יעני שמישהו הגזים את חייו'
    },

    {
        id: makeId(),
        type: 'activity',
        title: 'התקבלה הודעה פרטית',
        text: 'קיבלת הודעה פרטית מ-roeeba.'
    },
]