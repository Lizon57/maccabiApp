
import { CATEGORY_LINKS } from "../../../../../data/app/app-header-category-links"
import { NavListPreview } from "./nav-list-preview"


export const NavLinkList = ({ currentCategoryOpen, setCurrentCategoryOpen, onCloseMenu }: Props) => {
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
    currentCategoryOpen: string
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>
    onCloseMenu: () => void
}