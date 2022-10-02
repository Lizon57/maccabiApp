import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useOnClickOutside } from "../../../../../hooks/use-on-click-outside"
import { BiSort } from "react-icons/bi"


export const SortDropDown = ({ setIsLoading }: propsType) => {
    const [isSortModalOpen, setIsSortModalOpen] = useState(false)
    const toggleIsSortModalOpen = () => setIsSortModalOpen(!isSortModalOpen)


    const EL_SORT_CONTAINER = useRef<HTMLDivElement>(null)
    useOnClickOutside(EL_SORT_CONTAINER, () => setIsSortModalOpen(false))


    const navigate = useNavigate()
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const setSort = ({ key, order }: sortType) => {
        params.set('sKey', key)
        params.set('sOrder', order)
        navigate({ search: params.toString() })
        setIsLoading(true)
    }


    const getIsOptionActive = (optionData: { key: string, order: string }) => {
        return ((optionData.key === params.get('sKey')) && (optionData.order === params.get('sOrder'))) ? true : false
    }


    return (
        <div
            className={"entities-common-cmp--sort-drop-down__container " + (isSortModalOpen ? ' colorize' : '')}
            title="מיין תצוגה"
            onClick={toggleIsSortModalOpen}
            ref={EL_SORT_CONTAINER}>
            <span className="search-icon"><BiSort /></span>

            {isSortModalOpen && <div className="sort-drop-down-container">
                <div className="title">מיין תצוגה</div>
                <div className="options-list">
                    {DATA.map(option => {
                        const optionData = { key: option.key, order: option.order }
                        return (
                            <div
                                key={option.text}
                                className={"option" + (getIsOptionActive(optionData) ? ' active' : '')}
                                onClick={() => setSort(optionData)}
                            >{option.text}</div>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}


const DATA = [
    { text: 'כותרת (א-ת)', key: 'name', order: 'asc' },
    { text: 'כותרת (ת-א)', key: 'name', order: 'desc' },
    { text: 'תאריך הוספה (חדש-ישן)', key: 'createdAt', order: 'asc' },
    { text: 'תאריך הוספה (ישן-חדש)', key: 'createdAt', order: 'desc' },
    { text: 'צפיות (יותר-פחות)', key: 'views', order: 'asc' },
    { text: 'צפיות (פחות-יותר)', key: 'views', order: 'desc' },
]


type propsType = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}


type sortType = {
    key: string,
    order: string
}
