import { useRef, useState } from "react"
import { useOnClickOutside } from "../../../../hooks/use-on-click-outside"

import { BiSort } from "react-icons/bi"
import { BsFilter } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { SearchInput } from "../../../common/search-input/search-input"
import { SortDropDown } from "./sort-drop-down/sort-drop-down"


export const ListOptions = ({ setIsLoading }: propsType) => {
    return (
        <div className="entities-common-cmp--list-options__container">
            <SearchInput title="חפש לפי כותרת" placeholder="חפש כותרת" />
            <div className="search" title="חפש לפי כותרת">

            </div>

            <div className="filter" title="סנן פריטים">
                <BsFilter />
            </div>

            <SortDropDown setIsLoading={setIsLoading} />
        </div>
    )
}


type propsType = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}