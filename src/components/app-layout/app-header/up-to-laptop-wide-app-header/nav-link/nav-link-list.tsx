import { useState } from "react"

import { categoryLinks } from "../../data"
import { NavListPreview } from "./nav-list-preview"


export const NavLinkList = () => {
    const [currentCategoryOpen, setCurrentCategoryOpen] = useState('')

    return (
        <ul className="app-header--side-menu__category-links-container">
            {categoryLinks.map(category => <NavListPreview
                key={category.id}
                category={category}
                currentCategoryOpen={currentCategoryOpen}
                setCurrentCategoryOpen={setCurrentCategoryOpen} />)}
        </ul>
    )
}