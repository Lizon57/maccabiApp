import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "../../../../../../hooks/use-debounce"
import { Range } from "react-range"

import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"

import { Thumb } from "./thumb"
import { Track } from "./track"


export const MultiRangePicker = ({ filter, debouncedSetIsLoading }: Props) => {
    const PARAMS = new URL(window.location.href).searchParams
    const [values, setValues] = useState([filter.option?.min || 0, filter.option?.max || 100])

    const NAVIGATE = useNavigate()

    const navigateToNewActiveRange = (values: number[]) => {
        const activeValues = values.join('|')
        PARAMS.set(filter.param, activeValues)
        NAVIGATE({ search: PARAMS.toString() })
    }
    const debouncedNavigateToNewActiveRange = useDebounce(navigateToNewActiveRange, 1000)


    const onChangeValues = (values: number[]) => {
        setValues(values)
        debouncedNavigateToNewActiveRange(values)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        if (PARAMS.get(filter.param)) {
            const newValues = PARAMS.get(filter.param)?.split('|').map(value => +value)
            setValues(newValues || [])
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="entities-portal--multi-range-picker__container">
            <span className="title">{filter.title}</span>
            <div className="range-container">
                <Range
                    values={values}
                    step={1}
                    min={filter.option?.min || 0}
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