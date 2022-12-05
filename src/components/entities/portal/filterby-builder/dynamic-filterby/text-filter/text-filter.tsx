import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "../../../../../../hooks/use-debounce"

import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"

import { Dropdown } from "../../../../../common/dropdown/dropdown"

import { AiFillCaretDown } from "react-icons/ai"


const TYPE_NAMES = ['מתחיל ב', 'נגמר ב', 'כולל את']

export const TextFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const [type, setType] = useState(2)
    const [value, setValue] = useState('')

    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()


    const navigateNewSearch = (value: string) => {
        PARAMS.set(filter.param, value)
        PARAMS.set(filter.param + 'Type', type + '')
        NAVIGATE({ search: PARAMS.toString() })
    }
    const debouncedNavigateNewSearch = useDebounce(navigateNewSearch, 1000)


    const onSetValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: newValue } = target
        setValue(newValue)
        debouncedNavigateNewSearch(newValue)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        const newValue = PARAMS.get(filter.param)
        if (!newValue) return

        setValue(newValue)

        let type: string | number | null = PARAMS.get(filter.param + 'Type') || 2
        if (type === '0') type = 0
        else if (type === '1') type = 1
        else type = 2
        setType(type)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="entities-portal--text-filter__container">
            <span className="title">{filter.title}</span>

            <div className="content-container">
                <input
                    type="text"
                    placeholder="חיפוש (ניתן להפריד בפסיק)"
                    value={value}
                    onChange={(ev) => onSetValue(ev)}
                />

                <Dropdown controllerText={TYPE_NAMES[type]} controllerIcon={AiFillCaretDown} title="שיטת סינון">
                    <div className="options-container">
                        {TYPE_NAMES.map((typeName, idx) => <div
                            key={typeName}
                            className="type-option"
                            onClick={() => setType(idx)}
                        >{typeName}</div>)}
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
