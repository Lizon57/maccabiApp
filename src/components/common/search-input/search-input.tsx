import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { FiXCircle } from "react-icons/fi"


export const SearchInput = ({ placeholder, title, initialValue, searchCallback }: Props) => {
    const [search, setSearch] = useState<string>(initialValue || '')

    const onSearchHandler = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
        searchCallback && searchCallback(value)
        setSearch(value)
    }

    const onClearInput = () => {
        searchCallback && searchCallback('')
        setSearch('')
    }

    return (
        <div className="common-cmp--search-input__container" title={title}>
            <input
                type="text"
                value={search}
                className="search-input"
                placeholder={placeholder || title}
                onChange={onSearchHandler} />
            <span className={"clear-icon" + (search.length ? ' active' : '')} title="נקה חיפוש" onClick={onClearInput}>
                <FiXCircle />
            </span>
            <span className={"search-icon" + (search.length ? '' : ' active')}>
                <BiSearch />
            </span>
        </div>
    )
}



type Props = {
    placeholder?: string
    title: string,
    initialValue?: string,
    searchCallback?: (value: React.SetStateAction<string>) => Promise<void>
}