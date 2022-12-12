import { BranchChipList } from "../../branch-chip/branch-chip-list"
import { NavLinkList } from "../nav-link/nav-link-list"

export const SideMenu = ({ isNavOpen, currentCategoryOpen, setCurrentCategoryOpen, onCloseMenu }: Props) => {
    return (
        <div className={'app-header--side-menu__container' + (isNavOpen ? ' open' : '')}>
            <NavLinkList
                currentCategoryOpen={currentCategoryOpen}
                setCurrentCategoryOpen={setCurrentCategoryOpen}
                onCloseMenu={onCloseMenu}
            />

            <div className="branch-chip-list-container">
                <BranchChipList />
            </div>
        </div>
    )
}

type Props = {
    isNavOpen: boolean,
    currentCategoryOpen: string,
    setCurrentCategoryOpen: React.Dispatch<React.SetStateAction<string>>,
    onCloseMenu: () => void
}