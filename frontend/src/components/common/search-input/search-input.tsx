import { useState } from "react"
import classNames from "classnames"

import { ICON_TYPE_MAP } from "../../../constans/icon-type-map"


export const SearchInput = ({ placeholder, title, initialValue = '', searchCallback }: Props) => {
    const [search, setSearch] = useState(initialValue)

    const onSearchHandler = (value: string) => {
        searchCallback && searchCallback(value)
        setSearch(value)
    }


    const { search: { search: SearchIcon, clear: ClearIcon } } = ICON_TYPE_MAP

    return (
        <div className="common-cmp--search-input__container" title={title}>
            <input
                type="text"
                value={search}
                className="search-input"
                placeholder={placeholder || title}
                onChange={({ currentTarget: { value } }) => onSearchHandler(value)}
            />

            <span
                className={classNames('clear-icon', { active: search.length })}
                title="נקה חיפוש"
                onClick={() => onSearchHandler('')}
            >
                <SearchIcon />
            </span>

            <span className={classNames('search-icon', { active: search.length })}>
                <ClearIcon />
            </span>
        </div>
    )
}



type Props = {
    placeholder?: string
    title: string
    initialValue?: string
    searchCallback?: (str: string) => void
}