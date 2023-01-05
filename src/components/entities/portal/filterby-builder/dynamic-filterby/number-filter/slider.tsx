import { Range } from "react-range"

import { Thumb } from "./thumb"
import { Track } from "./track"

export const Slider = ({ min, max, values, type, setValue }: Props) => {
    const manipulatedValues = (values.length === 2) ? values : [values[0]]

    const rangeProps = { min, max }

    return (
        <div>
            <Range
                values={manipulatedValues}
                step={1}
                rtl
                {...rangeProps}
                onChange={setValue}
                renderTrack={({ props, children }) => <Track
                    props={props}
                    values={manipulatedValues}
                    {...rangeProps}
                    type={type}
                    children={children}
                />}
                renderThumb={({ index, props, isDragged }) => <Thumb
                    key={index}
                    props={props}
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