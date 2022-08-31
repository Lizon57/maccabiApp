import BEMHelper from "react-bem-helper"
import { BiSearch } from "react-icons/bi"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'option-bar' })


export const Search = () => {
    return (
        <div {...BEM_HELPER('search-container')}>
            <input type="text" placeholder="חפש במכביפדיה" {...BEM_HELPER('search-input')} />
            <BiSearch />
        </div>
    )
}