import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import { AiFillCaretDown } from "react-icons/ai"

import { EntityFilterOption } from "../../../../../../models/interfaces/entities/entity-filter-option"

import { eventBus } from "../../../../../../services/event-bus-service"

import { Dropdown } from "../../../../../common/dropdown/dropdown"


const TYPE_NAMES = ['מתחיל ב', 'נגמר ב', 'כולל את']

export const TextFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const { param, title } = filter
    const [type, setType] = useState(2)
    const [value, setValue] = useState('')

    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()


    const navigateNewSearch = (value: string) => {
        params.set(param, value)
        params.set(param + 'Type', type + '')
        navigate({ search: params.toString() })
    }
    const debouncedNavigateNewSearch = useDebouncedCallback(navigateNewSearch, 1000)


    const onSetValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value: newValue } = target
        setValue(newValue)
        debouncedNavigateNewSearch(newValue)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        const unsubscribeClearFilter = eventBus.on('clear-filter', (param) => {
            if (param === filter.param) {
                setValue('')
                setType(2)
            }
        })


        const newValue = params.get(param)
        if (!newValue) return

        setValue(newValue)

        let type: string | number | null = params.get(param + 'Type') || 2
        if (type === '0') type = 0
        else if (type === '1') type = 1
        else type = 2
        setType(type)


        return () => unsubscribeClearFilter()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="entities-portal--text-filter__container">
            <span className="title">{title}</span>

            <div className="content-container">
                <input
                    type="text"
                    placeholder={"חיפוש" + ((type === 2) ? '  (ניתן להפריד בפסיק)' : '')}
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
    filter: EntityFilterOption
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
