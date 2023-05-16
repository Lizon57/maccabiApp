import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import classNames from "classnames"

import { eventBus } from "../../../../../../services/event-bus-service"

import { EntityFilterOption } from "../../../../../../models/interfaces/entities/entity-filter-option"


export const CheckboxFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const [value, setValue] = useState<boolean | undefined>()

    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()


    const navigateNewSearch = (newValue: boolean | undefined) => {
        if (typeof newValue === 'boolean') params.set(filter.param, newValue.toString())
        else params.delete(filter.param)

        navigate({ search: params.toString() })
    }
    const debouncedNavigateNewSearch = useDebouncedCallback(navigateNewSearch, 1000)


    const onSetValue = (newValue: boolean | undefined) => {
        setValue(newValue)
        debouncedNavigateNewSearch(newValue)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        const unsubscribeClearFilter = eventBus.on('clear-filter', (param) => {
            if (param === filter.param) setValue(undefined)
        })


        const newValue = params.get(filter.param)
        if (!newValue) return
        setValue(JSON.parse(newValue))


        return () => unsubscribeClearFilter()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    const getIsActive = (option: string) => {
        switch (option) {
            case 'true':
                if (typeof value === 'boolean' && value) return true
                break

            case 'false':
                if (typeof value === 'boolean' && !value) return true
                break

            case 'undefined':
                if (typeof value !== 'boolean') return true
                break
        }

        return false
    }


    return (
        <div className="entities-portal--checkbox-filter__container">
            <span className="title">{filter.title}</span>

            <div className="content-container">
                <span className="options-container">
                    <span
                        className={classNames('option', { active: getIsActive('true') })}
                        onClick={() => onSetValue(true)}
                    >רק</span>

                    <span
                        className={classNames('option', { active: getIsActive('false') })}
                        onClick={() => onSetValue(false)}
                    >ללא</span>

                    <span className={classNames('param', { active: (typeof value === 'boolean') })}>{filter.title}</span>
                </span>

                <span
                    className={classNames('clear', ((typeof value === 'boolean') ? 'clickable' : 'active'))}
                    onClick={() => onSetValue(undefined)}
                >לא משנה לי</span>
            </div>
        </div >
    )
}


type Props = {
    filter: EntityFilterOption
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}