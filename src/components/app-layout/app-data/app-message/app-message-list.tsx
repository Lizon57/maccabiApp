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
        text: 'הדף "אבי נמני" נערך בהצלחה.'
    },
]