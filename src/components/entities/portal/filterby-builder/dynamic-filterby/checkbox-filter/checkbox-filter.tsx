import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDebounce } from "../../../../../../hooks/use-debounce"

import { EntityFilterOption } from "../../../../../../types/entity/filter/entity-filter-option"


export const CheckboxFilter = ({ filter, debouncedSetIsLoading }: Props) => {
    const [value, setValue] = useState<boolean | undefined>()

    const PARAMS = new URL(window.location.href).searchParams
    const NAVIGATE = useNavigate()


    const navigateNewSearch = (newValue: boolean | undefined) => {
        if (typeof newValue === 'boolean') PARAMS.set(filter.param, newValue.toString())
        else PARAMS.delete(filter.param)

        NAVIGATE({ search: PARAMS.toString() })
    }
    const debouncedNavigateNewSearch = useDebounce(navigateNewSearch, 1000)


    const onSetValue = (newValue: boolean | undefined) => {
        setValue(newValue)
        debouncedNavigateNewSearch(newValue)
        debouncedSetIsLoading(true)
    }


    useEffect(() => {
        const newValue = PARAMS.get(filter.param)
        if (!newValue) return

        setValue(JSON.parse(newValue))
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps



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
                        className={"option" + (getIsActive('true') ? ' active' : '')}
                        onClick={() => onSetValue(true)}
                    >רק</span>

                    <span
                        className={"option" + (getIsActive('false') ? ' active' : '')}
                        onClick={() => onSetValue(false)}
                    >ללא</span>

                    <span className={"param" + ((typeof value === 'boolean') ? ' active' : '')}>{filter.title}</span>
                </span>

                <span
                    className={"clear" + ((typeof value === 'boolean') ? ' clickable' : '')}
                    onClick={() => onSetValue(undefined)}
                >לא משנה לי</span>
            </div>
        </div >
    )
}


type Props = {
    filter: EntityFilterOption,
    debouncedSetIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}