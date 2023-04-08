import { ActivityDuration } from "../../models/common/activity-duration"


export const sortActivityDurations = (activityDurations: ActivityDuration[]) => {
    activityDurations.sort((duration1, duration2) => {
        if ((typeof duration1?.end?.year === 'number') && (typeof duration2?.end?.year === 'number')) {
            if (duration1.end.year > duration2.end.year) return 1
            else if (duration1.end.year < duration2.end.year) return -1
            else if ((typeof duration1.end.month === 'number' && (typeof duration2.end.month === 'number'))) {
                if (duration1.end.month > duration2.end.month) return 1
                else if (duration1.end.month < duration2.end.month) return -1
                else if ((typeof duration1.end.day === 'number' && (typeof duration2.end.day === 'number'))) {
                    if (duration1.end.day > duration2.end.day) return 1
                    else if (duration1.end.day < duration2.end.day) return -1
                    else return 0
                }
                else if (typeof duration1.end.day === 'number') return -1
                else if (typeof duration2.end.day === 'number') return 1
                else return 0
            }
            else if (typeof duration1.end.month === 'number') return -1
            else if (typeof duration2.end.month === 'number') return 1
        }
        else if (typeof duration1?.end?.year === 'number') return 1
        else if (typeof duration2?.end?.year === 'number') return -1
        return 0
    })

    return activityDurations
}