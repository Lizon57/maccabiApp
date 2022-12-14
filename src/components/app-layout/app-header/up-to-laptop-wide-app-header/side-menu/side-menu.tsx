import { BranchChipList } from "../../branch-chip/branch-chip-list"
import { NavLinkList } from "../nav-link/nav-link-list"

export const SideMenu = ({ isNavOpen, currentCategoryOpen, setCurrentCategoryOpen, onCloseMenu }: Props) => {
    const navLinkListProps = { currentCategoryOpen, setCurrentCategoryOpen, onCloseMenu }

    return (
        <div className={'app-header--side-menu__container' + (isNavOpen ? ' open' : '')}>
            <NavLinkList {...navLinkListProps} />

            <div className="branch-chip-list-container">
                <BranchChipList />
            </div>
        </div>
    )
}

type Props = {
    isNavOpen: boolean
    currentCategoryOpen: string
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>
    onCloseMenu: () => void
}