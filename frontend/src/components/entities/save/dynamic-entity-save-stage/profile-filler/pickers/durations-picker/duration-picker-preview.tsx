import { Duration } from "../../../../../../../models/interfaces/common/duration"
import { DatePicker } from "./date-picker"


export const DurationPickerPreview = ({ idx, duration, onPickOption }: Props) => {
    return (
        <div className="entity-save-cmp--profile-filler-duration-picker-preview__container">
            <div>
                <span className="indicator">החל מ</span>
                <DatePicker isDurationStartDate idx={idx} date={duration.start} onPickOption={onPickOption} />
            </div>

            <div>
                <span className="indicator">עד ל</span>
                <DatePicker isDurationStartDate={false} idx={idx} date={duration.end} onPickOption={onPickOption} />
            </div>
        </div>
    )
}


type Props = {
    idx: number,
    duration: Duration
    onPickOption: (value: string, idx: number, isDurationStartDate: boolean, extendKey: string) => void
}