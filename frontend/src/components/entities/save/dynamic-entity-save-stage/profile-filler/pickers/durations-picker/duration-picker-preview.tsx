import { FaTimes } from "react-icons/fa"
import { Duration } from "../../../../../../../models/interfaces/common/duration"
import { DatePicker } from "./date-picker"


export const DurationPickerPreview = ({ idx, duration, onPickDuration, onRemoveDuration }: Props) => {
    return (
        <div className="entity-save-cmp--profile-filler-duration-picker-preview__container">
            <div className="duration-picker">
                <div>
                    <span className="indicator">החל מ</span>
                    <DatePicker isDurationStartDate idx={idx} date={duration.start} onPickOption={onPickDuration} />
                </div>

                <div>
                    <span className="indicator">עד ל</span>
                    <DatePicker isDurationStartDate={false} idx={idx} date={duration.end} onPickOption={onPickDuration} />
                </div>
            </div>

            <span className="remove-icon" title="הסר תקופת פעילות" onClick={() => onRemoveDuration(idx)}><FaTimes /></span>
        </div>
    )
}


type Props = {
    idx: number
    duration: Duration
    onPickDuration: (value: string, idx: number, isDurationStartDate: boolean, extendKey: string) => void
    onRemoveDuration: (idx: number) => void
}