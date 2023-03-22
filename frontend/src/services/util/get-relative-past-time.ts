const UNITS: Units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: 24 * 60 * 60 * 1000 * 365 / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
}

const FORMATTER = new Intl.RelativeTimeFormat('he', { numeric: 'auto' })

export const getRelativePastTime = (fromDate: Date, toDate = new Date()) => {
    if (!fromDate) return

    fromDate = new Date(fromDate)
    const elapsedTime = fromDate.getTime() - toDate.getTime()

    for (const unit in UNITS) {
        if (Math.abs(elapsedTime) > UNITS[unit] || unit === 'second') {
            return FORMATTER.format(Math.round(elapsedTime / UNITS[unit]), unit as Unit)
        }
    }
}

type Units = { [key: string]: number }
type Unit = "year" | "years" | "quarter" | "quarters" | "month" | "months" | "week" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds"