import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "../../../../../../hooks/use-debounce"

import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"

import { Slider } from "./slider"
import { Dropdown } from "../../../../../common/dropdown/dropdown"

import { AiFillCaretDown } from "react-icons/ai"


const TYPE_NAMES = ['החל מ', 'עד ל', 'החל מ ועד ל']


export const NumberFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const [type, setType] = useState(2)

    const MIN = filter.option?.min || 0
    const MAX = filter.option?.max || 100
    const [values, setValues] = useState([MIN, MAX])

    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()

    const navigateNewPick = (values: number[]) => {
        let activeValues: number[] | string = values
        if (type === 0) activeValues = [values[0], MAX]
        else if (type === 1) activeValues = [MIN, values[0]]
        activeValues = activeValues.join('|')
        PARAMS.set(filter.param, activeValues)
        PARAMS.set(filter.param + 'Type', type + '')
        NAVIGATE({ search: PARAMS.toString() })
    }
    const debouncedNavigateToNewActiveRange = useDebounce(navigateNewPick, 1000)


    const onSetType = (type: number) => {
        switch (type) {
            case 0:
                setValues([values[0]])
                break

            case 1:
                setValues([values[1] || values[0]])
                break

            case 2:
                setValues([MIN, MAX])
                break

        }
        setType(type)
    }


    const onSetValues = (values: number[]) => {
        setValues(values)
        debouncedNavigateToNewActiveRange(values)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        if (!PARAMS.get(filter.param)) return

        let type: string | number | null = PARAMS.get(filter.param + 'Type') || 2
        type = +type
        setType(type)

        let newValues = PARAMS.get(filter.param)?.split('|').map(value => +value) || []
        if (type === 0) newValues = [newValues[0]]
        else if (type === 1) newValues = [newValues[1]]
        setValues(newValues)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div className="entities-portal--number-picker__container">
            <span className="title">{filter.title}</span>
            <div className="content-container">
                <>
                    <Slider
                        min={MIN}
                        max={MAX}
                        values={values}
                        type={type}
                        setValue={onSetValues}
                    />

                    <div className="additional-content-container">
                        <span className="indicator">
                            {(type === 1) ? '' : `החל מ-${values[0]}`}
                            {type === 2 && ' ו'}
                            {type === 1 && `עד ל-${values[0]}`}
                            {type === 2 && `עד ל-${values[1]}`}
                        </span>

                        <div className="type-toggler">
                            <Dropdown controllerText={TYPE_NAMES[type]} controllerIcon={AiFillCaretDown} title="שיטת סינון">
                                <div className="options-container">
                                    {TYPE_NAMES.map((typeName, idx) => <div
                                        key={typeName}
                                        className="type-option"
                                        onClick={() => onSetType(idx)}
                                    >{typeName}</div>)}
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
