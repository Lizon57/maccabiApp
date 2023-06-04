import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

import { setAppScreenZIndex } from "../../../../store/action/app-layout-action"

import { useOnClickOutside } from "../../../../hooks/use-on-click-outside"
import { useSetLoggedUser } from "../../../../hooks/user/useSetLoggedUser"

import wideLogo from "../../../../assets/images/wide-logo.png"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { AppOptionBar } from "../../app-option-bar/app-option-bar"
import { AppSearch } from "../app-search/app-search"
import { SideMenu } from "./side-menu/side-menu"


export const UpToLaptopWideAppHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [currentCategoryOpen, setCurrentCategoryOpen] = useState('')
    const elMenu = useRef<HTMLDivElement>(null)

    useSetLoggedUser()


    const toggleMenu = (shouldOpen = false) => {
        setCurrentCategoryOpen('')
        setIsNavOpen(shouldOpen)
        shouldOpen ? setAppScreenZIndex(499) : setAppScreenZIndex(0)
    }

    useOnClickOutside(elMenu, () => toggleMenu(false))

    const closeMenu = () => {
        setCurrentCategoryOpen('')
        setIsNavOpen(false)
        setAppScreenZIndex(0)
    }


    const sideMenuProps = { isNavOpen, currentCategoryOpen, setCurrentCategoryOpen }

    return (
        <header className="app-layout--app-header__up-to-laptop-wide" ref={elMenu}>
            <div className="content">
                <div className="navigator-container">
                    <span className="icon-wrapper" onClick={() => toggleMenu(!isNavOpen)}><FaBars /></span>
                    <Link to="./" onClick={closeMenu}>
                        <img src={wideLogo} alt="עמוד ראשי" title="עמוד ראשי" className="brand-logo" />
                    </Link>
                </div>
                <div className="options-container">
                    <RenderByDeviceWidth minDeviceWide="mobile" maxDeviceWide="tablet" isInclusive>
                        <AppOptionBar />
                    </RenderByDeviceWidth>
                    <AppSearch />
                </div>
            </div>

            <SideMenu {...sideMenuProps} onCloseMenu={closeMenu} />
        </header>
    )
}