import BEMHelper from "react-bem-helper"

import { Search } from "./search/search"


const BEM_HELPER = new BEMHelper({ prefix: 'app-header--', name: 'option-bar' })


export const OptionBar = () => {
    return (
        <div {...BEM_HELPER('container')}>
            <Search />
        </div>

    )
}