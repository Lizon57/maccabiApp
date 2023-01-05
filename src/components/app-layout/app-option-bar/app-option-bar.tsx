import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useStoreDispatch } from "../../../hooks/store/use-store-dispatch"
import { useOnClickOutside } from "../../../hooks/use-on-click-outside"
import { useWindowSize } from "../../../hooks/use-window-size"
import { setAppScreenZIndex } from "../../../store/slicer/app-layout-slicer"

import { OPTION_BAR } from "../../../data/app/option-bar"


export const AppOptionBar = () => {
    const [selectOption, setSelectOption] = useState('')
    const dispatch = useStoreDispatch()

    const elOptionBar = useRef<HTMLUListElement>(null)
    const location = useLocation()
    const { width: windowWidth } = useWindowSize()

    const isLargeScreen = (windowWidth > 550)


    const onCloseOption = () => {
        if (!isLargeScreen) setSelectOption('')
    }

    const onOpenOption = (option: string) => {
        setSelectOption(option)
        dispatch(setAppScreenZIndex(499))
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
                            <ul
                                className={'links-list-container' + (selectOption === title ? ' open' : '')}
                            >
                                {option.childrens.map(({ isRelative, path, text, id }) => {
                                    return (
                                        <li key={id} className="link-container">
                                            <Link
                                                to={isRelative ? location.pathname + path : path}
                                                onClick={onCloseOption}
                                            >
                                                {text}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}