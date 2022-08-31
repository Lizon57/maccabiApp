import BEMHelper from "react-bem-helper"
import { BiSearch } from "react-icons/bi"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'option-bar' })


export const Search = () => {
    return (
        <div {...BEM_HELPER('search-container')} title="חפש במכביפדיה">
            <input type="text" {...BEM_HELPER('search-input')} placeholder="חפש במכביפדיה" />
            <BiSearch />
        </div>
    )
}