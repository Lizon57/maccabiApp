import BEMHelper from "react-bem-helper"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'option-bar' })


export const Search = () => {
    return (
        <input type="text" placeholder="חפש במכביפדיה" {...BEM_HELPER('search-input')} />
    )
}