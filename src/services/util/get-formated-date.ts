import { getMonthName } from "./get-month-name"

export const getFormatedDate = (
    date: { day?: number, month?: number, year?: number, timestamp?: number },
    isZeroIndex: boolean = true,
    isLinkAble: boolean = false) => {

    let value = ''

    if (isLinkAble) {
        return value
    }

    if (date.day) {
        value += date.day
        if (typeof date.month === 'number') {
            value += ' ב' + getMonthName(date.month, isZeroIndex)
            value += ' ' + (getYear(date.year) || 'בשנה לא ידועה')
        } else {
            value += ' (חודש לא ידוע) ב-' + (getYear(date.year) || 'בשנה לא ידועה')
        }
        return value
    }

    if (typeof date.month === 'number') {
        value += getMonthName(date.month, isZeroIndex)

        value += ' ' + getYear(date.year)
        return value
    }

    else return getYear(date.year)
}


const getYear = (year: number | undefined) => {
    return (year) ? year : 'בשנה לא ידועה'
}