import { Range } from "react-range"

import { Thumb } from "./thumb"
import { Track } from "./track"

export const Slider = ({ min, max, values, type, setValue }: Props) => {
    const manipulatedValues = (values.length === 2) ? values : [values[0]]

    return (
        <div>
            <Range
                values={manipulatedValues}
                step={1}
                min={min}
                max={max}
                rtl={true}
                onChange={(values) => setValue(values)}
                renderTrack={({ props, children }) => <Track
                    props={props}
                    values={manipulatedValues}
                    min={min}
                    max={max}
                    type={type}
                    children={children}
                />}
                renderThumb={({ index, props, isDragged }) => <Thumb
                    key={index}
                    index={index}
                    props={props}
                    isDragged={isDragged}
                    values={manipulatedValues}
                />}
            />
        </div>
    )
}


type Props = {
    min: number
    max: number
    values: number[]
    type: number
    setValue: (values: number[]) => void
}