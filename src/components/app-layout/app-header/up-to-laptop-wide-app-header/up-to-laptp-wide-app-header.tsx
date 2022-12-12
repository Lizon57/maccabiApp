import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useOnClickOutside } from "../../../../hooks/use-on-click-outside"
import { useStoreDispatch } from "../../../../hooks/store/use-store-dispatch"
import { setAppScreenZIndex } from "../../../../store/slicer/app-layout-slicer"

import { FaBars } from "react-icons/fa"

import wideLogo from "../../../../assets/images/wide-logo.png"
import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { AppOptionBar } from "../../app-option-bar/app-option-bar"
import { AppSearch } from "../app-search/app-search"
import { SideMenu } from "./side-menu/side-menu"


export const UpToLaptopWideAppHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [currentCategoryOpen, setCurrentCategoryOpen] = useState('')

    const EL_MENU_CONTAINER = useRef<HTMLDivElement>(null)
    const dispatch = useStoreDispatch()


    const onOpenMenu = () => {
        setCurrentCategoryOpen('')
        setIsNavOpen(true)
        dispatch(setAppScreenZIndex(499))
    }

    const onCloseMenu = () => {
        setIsNavOpen(false)
        dispatch(setAppScreenZIndex(0))
    }
    useOnClickOutside(EL_MENU_CONTAINER, onCloseMenu)

    const toggleMenuOpen = () => {
        if (isNavOpen) onCloseMenu()
        else onOpenMenu()
    }


    return (
        <header className="app-layout--app-header__up-to-laptop-wide" ref={EL_MENU_CONTAINER}>
            <div className="content">
                <div className="navigator-container">
                    <span className="icon-wrapper" onClick={toggleMenuOpen}><FaBars /></span>
                    <Link to="./">
                        <img src={wideLogo}
                            alt="עמוד ראשי"
                            title="עמוד ראשי"
                            className="brand-logo" />
                    </Link>
                </div>
                <div className="options-container">
                    <RenderByDeviceWidth minDeviceWide="mobile" maxDeviceWide="tablet" isInclusive={true}>
                        <AppOptionBar />
                    </RenderByDeviceWidth>
                    <AppSearch />
                </div>
            </div>

            <SideMenu
                isNavOpen={isNavOpen}
                currentCategoryOpen={currentCategoryOpen}
                setCurrentCategoryOpen={setCurrentCategoryOpen}
                onCloseMenu={onCloseMenu}
            />
        </header>
    )
}