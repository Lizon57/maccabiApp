import { Duration } from "../../models/interfaces/common/duration"

import { getFormattedDate } from "./get-formatted-date"


const formatter = new Intl.ListFormat('he')

export const getFormattedDurations = (dates: Duration[]) => {
    const datesList = dates.map((date) => {
        let formatedText = ''

        if (date.start?.day || date.start?.month || date.start?.year) {
            formatedText += `החל מ-${getFormattedDate(date.start, false, false)}`

            if (date.end?.day || date.end?.month || date.end?.year) {
                formatedText += ` ועד ל-${getFormattedDate(date.end, false, false)}`
            }
        } else if (date.end?.day || date.end?.month || date.end?.year) {
            formatedText += ` עד ל-${getFormattedDate(date.end, false, false)}`
        }

        return formatedText
    })
    return formatter.format(datesList)
}