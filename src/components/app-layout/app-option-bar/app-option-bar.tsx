import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { setAppScreenZIndex } from "../../../store/action/app-layout-action"

import { useOnClickOutside } from "../../../hooks/use-on-click-outside"
import { useWindowSize } from "../../../hooks/use-window-size"

import { OPTION_BAR } from "../../../data/app/option-bar"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"


export const AppOptionBar = () => {
    const { pageType } = useSelector((state: RootState) => state.appLayoutModule)
    console.log(pageType)
    const [selectOption, setSelectOption] = useState('')

    const elOptionBar = useRef<HTMLUListElement>(null)
    const location = useLocation()
    const { width: windowWidth } = useWindowSize()

    const isLargeScreen = (windowWidth > 550)


    const onCloseOption = () => {
        if (!isLargeScreen) setSelectOption('')
    }

    const onOpenOption = (option: string) => {
        setSelectOption(option)
        setAppScreenZIndex(499)
    }

    const onIconClick = (option: string) => {
        if (isLargeScreen) return
        selectOption === option ? onCloseOption() : onOpenOption(option)
    }

    useOnClickOutside(elOptionBar, onCloseOption)


    return (
        <div className="app-layout--app-option-bar__container">
            <ul className="options-list-container" ref={elOptionBar}>
                {OPTION_BAR.map(option => {
                    const { id, title, icon: Icon } = option
                    return (
                        <li key={id} className="category-container">
                            <span className="icon-wrapper">
                                <Icon onClick={() => onIconClick(title)} />
                            </span>

                            <ul className={'links-list-container' + (selectOption === title ? ' open' : '')}>
                                {option.childrens.map(({ isRelative, path, text, id, pageTypesRestriction }) => {
                                    const shouldRender = pageTypesRestriction?.find(restriction => (restriction === pageType))
                                    if (!pageTypesRestriction?.length || shouldRender) return (
                                        <li key={id} className="link-container">
                                            <Link
                                                to={isRelative ? location.pathname + path : path}
                                                onClick={onCloseOption}
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    )
                                    return null
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}