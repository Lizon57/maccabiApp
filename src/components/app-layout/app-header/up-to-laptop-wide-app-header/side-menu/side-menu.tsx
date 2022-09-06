import { BranchChipList } from "../../branch-chip/branch-chip-list"
import { NavLinkList } from "../nav-link/nav-link-list"

export const SideMenu = ({ isNavOpen }: propsType) => {
    return (
        <div className={'app-header--side-menu__container' + (isNavOpen ? ' open' : '')}>
            <NavLinkList />

            <div className="branch-chip-list-container">
                <BranchChipList />
            </div>
        </div>
    )
}

type propsType = {
    isNavOpen: boolean
}