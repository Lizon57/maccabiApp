import { getMonthName } from "./get-month-name"

export const getFormattedDate = (
    date: { day?: number, month?: number, year?: number, timestamp?: number },
    isZeroIndex: boolean = true,
    isLinkAble: boolean = false) => {

    if (!date) return

    const { day, month, year } = date
    let value = ''

    if (isLinkAble) return value

    if (day) {
        value += day
        if (typeof month === 'number') {
            value += ' ב' + getMonthName(month, isZeroIndex)
            value += ' ' + (getYear(year) || 'בשנה לא ידועה')
        } else {
            value += ' (חודש לא ידוע) ב-' + (getYear(year) || 'בשנה לא ידועה')
        }
        return value
    }

    if (typeof month === 'number') {
        value += getMonthName(month, isZeroIndex)

        value += ' ' + getYear(year)
        return value
    }

    else return getYear(year)
}


const getYear = (year: number | undefined) => {
    return (year) ? year : 'בשנה לא ידועה'
}