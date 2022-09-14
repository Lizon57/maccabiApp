export const convertTimestampToDisplayText = (timestamp: number) => {
    const time = new Date(timestamp)
    const year = time.getFullYear()
    const month = _getMonthName(time.getMonth() + 1)
    const day = time.getDate()
    return `ה-${day} ב${month} ${year}`
}


const _getMonthName = (month: number) => {
    switch (month) {
        case 1:
            return 'ינואר'

        case 2:
            return 'פברואר'

        case 3:
            return 'מרץ'

        case 4:
            return 'אפריל'

        case 5:
            return 'מאי'

        case 6:
            return 'יוני'

        case 7:
            return 'יולי'

        case 8:
            return 'אוגוסט'

        case 9:
            return 'ספטמבר'

        case 10:
            return 'אוקטובר'

        case 11:
            return 'נובמבר'

        case 12:
            return 'דצמבר'

        default:
            return ''
    }
}