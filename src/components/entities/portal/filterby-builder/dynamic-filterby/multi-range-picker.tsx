import { useState } from "react"
import { Range } from "react-range"
import { EntityFilterOption } from "../../../../../types/entity/filter/entity-filter-option"
import { Thumb } from "./multi-range-picker/thumb"
import { Track } from "./multi-range-picker/track"


export const MultiRangePicker = ({ filter, debouncedSetIsLoading }: Props) => {
    const [values, setValues] = useState([20, 80])


    const onChangeValues = (values: number[]) => {
        setValues(values)
        debouncedSetIsLoading(true)
        console.log(values)
    }


    return (
        <div className="entities-portal--multi-range-picker__container">
            <span className="title">{filter.title}</span>
            <div className="range-container">
                <Range
                    values={values}
                    step={1}
                    min={0}
                    max={100}
                    rtl={true}
                    onChange={(values) => onChangeValues(values)}
                    renderTrack={({ props, children }) => <Track props={props} children={children} values={values} />}
                    renderThumb={({ index, props, isDragged }) => <Thumb
                        key={index}
                        index={index}
                        props={props}
                        isDragged={isDragged}
                        values={values}
                    />}
                />

                <div className="range-indicator">
                    לפחות {values[0]} ועד {values[1]}
                </div>
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}