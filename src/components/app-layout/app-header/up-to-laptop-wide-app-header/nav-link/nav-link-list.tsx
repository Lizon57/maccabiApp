import { useState } from "react"

import { CATEGORY_LINKS } from "../../../../../data/app/app-header-category-links"
import { NavListPreview } from "./nav-list-preview"


export const NavLinkList = ({ onCloseMenu }: Props) => {
    const [currentCategoryOpen, setCurrentCategoryOpen] = useState('')

    return (
        <ul className="app-header--side-menu__category-links-container">
            {CATEGORY_LINKS.map(category => <NavListPreview
                key={category.id}
                category={category}
                currentCategoryOpen={currentCategoryOpen}
                setCurrentCategoryOpen={setCurrentCategoryOpen} 
                onCloseMenu={onCloseMenu}
                />)}
        </ul>
    )
}


type Props = {
    onCloseMenu: () => void
}