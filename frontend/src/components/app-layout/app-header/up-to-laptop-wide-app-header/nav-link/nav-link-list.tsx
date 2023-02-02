import { CATEGORY_LINKS } from "../../../../../constans/app-category-links"
import { NavLinkPreview } from "./nav-link-preview"


export const NavLinkList = ({ currentCategoryOpen, setCurrentCategoryOpen, onCloseMenu }: Props) => {
    return (
        <ul className="app-header--side-menu__category-links-container">
            {CATEGORY_LINKS.map(category => {
                const navListPreviewProps = { category, currentCategoryOpen, setCurrentCategoryOpen, onCloseMenu }
                return (<NavLinkPreview key={category.id}  {...navListPreviewProps} />)
            })}
        </ul>
    )
}


type Props = {
    currentCategoryOpen: string
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>
    onCloseMenu: () => void
}