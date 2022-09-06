import { NavLinkList } from "../nav-link/nav-link-list"

export const SideMenu = ({ isNavOpen }: propsType) => {
    return (
        <div className={'app-header--side-menu__container' + (isNavOpen ? ' open' : '')}>
            <NavLinkList />
        </div>
    )
}

type propsType = {
    isNavOpen: boolean
}