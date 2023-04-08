import { useState } from 'react'
import uuid from 'react-uuid'

import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../../store/store'
import { setSaveEntityItem } from '../../../../../../../store/action/save-entity-item-action'

import { recursiveValueSetterByKey } from '../../../../../../../services/util/recursive-value-setter-by-key'

import { Duration } from '../../../../../../../models/interfaces/common/duration'

import { DurationAdd } from './duration-add'
import { DurationPickerPreview } from './duration-picker-preview'


const DURATION_MOCK = {
    start: {
        day: undefined,
        month: undefined,
        year: undefined
    },
    end: {
        day: undefined,
        month: undefined,
        year: undefined
    },
}

export const DurationsPickerList = ({ pickerInfo }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)
    const [durations, setDurations] = useState<Duration[]>(item.entityInfo.item.activityDurations || [])


    const onAddDuration = () => {
        const newDuration = structuredClone(DURATION_MOCK)
        setDurations(prevDurations => [...prevDurations, newDuration])
    }


    const onPickDuration = (value: string, idx: number, isDurationStartDate: boolean, type: string) => {
        const key = (isDurationStartDate ? 'start.' : 'end.') + type
        const durationsCopy = structuredClone(durations)
        const duration = durationsCopy[idx]

        let formattedValue: number | undefined

        switch (value) {
            case 'יום':
            case 'חודש':
            case 'שנה':
                formattedValue = undefined
                break

            default:
                formattedValue = +value
        }

        recursiveValueSetterByKey(formattedValue, duration, key)
        const editedItem = structuredClone(item)
        recursiveValueSetterByKey(durationsCopy, editedItem, pickerInfo.key)
        setDurations(durationsCopy)
        setSaveEntityItem(editedItem)
    }


    const onRemoveDuration = (idx: number) => {
        const newDurations = durations.filter((_, index) => index !== idx)
        const editedItem = structuredClone(item)

        recursiveValueSetterByKey(newDurations, editedItem, pickerInfo.key)
        setDurations(newDurations)
        setSaveEntityItem(editedItem)
    }


    return (
        <div className="entity-save-cmp--profile-filler-durations-picker-list__container">
            <span className="title">{pickerInfo.title}</span>
            <div>
                {durations.map((duration, idx) => <DurationPickerPreview
                    key={uuid()}
                    idx={idx}
                    duration={duration}
                    onPickDuration={onPickDuration}
                    onRemoveDuration={onRemoveDuration}
                />
                )}
                <DurationAdd onClick={onAddDuration} />
            </div>
        </div>
    )
}



type Props = {
    pickerInfo: PickerInfo
}


type PickerInfo = {
    type: string
    title: string
    key: string
    isRequire: boolean
}