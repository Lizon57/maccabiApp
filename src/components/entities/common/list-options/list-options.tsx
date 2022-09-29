import { useRef, useState } from "react"
import { useOnClickOutside } from "../../../../hooks/use-on-click-outside"

import { BiSearch, BiSort } from "react-icons/bi"
import { BsFilter } from "react-icons/bs"
import { useNavigate } from "react-router-dom"


export const ListOptions = () => {
    const [isSortModalOpen, setIsSortModalOpen] = useState(false)
    const toggleIsSortModalOpen = () => setIsSortModalOpen(!isSortModalOpen)


    const EL_SORT_CONTAINER = useRef<HTMLDivElement>(null)
    useOnClickOutside(EL_SORT_CONTAINER, () => setIsSortModalOpen(false))


    const navigate = useNavigate()
    const setSort = ({ key, order }: sortType) => {
        const url = new URL(window.location.href)
        const params = new URLSearchParams(url.search);
        params.set('מיון', key)
        params.set('סדר', order)
        navigate({ search: params.toString() })
    }


    return (
        <div className="entities-common-cmp--list-options__container">
            <div className="search" title="חפש לפי כותרת">
                <input type="text" className="search-input" placeholder="חפש כותרת" />
                <BiSearch />
            </div>

            <div className="filter" title="סנן פריטים">
                <BsFilter />
            </div>

            <div
                className={"sort" + (isSortModalOpen ? ' colorize' : '')}
                title="מיין תצוגה"
                onClick={toggleIsSortModalOpen}
                ref={EL_SORT_CONTAINER}>
                <span className="search-icon"><BiSort /></span>

                {isSortModalOpen && <div className="sort-drop-down-container">
                    <div className="title">מיין תצוגה</div>
                    <div className="options-list">
                        <div className="option" onClick={() => setSort({ key: 'כותרת', order: 'עולה' })}> כותרת (א-ת)</div>
                        <div className="option" onClick={() => setSort({ key: 'כותרת', order: 'יורד' })}> כותרת (ת-א)</div>
                        <div className="option" onClick={() => setSort({ key: 'הוספה', order: 'עולה' })}> תאריך הוספה (מהחדש לישן)</div>
                        <div className="option" onClick={() => setSort({ key: 'הוספה', order: 'יורד' })}> תאריך הוספה (מהישן לחדש)</div>
                    </div>
                </div>}
            </div>
        </div>
    )
}


type sortType = {
    key: string,
    order: string
}