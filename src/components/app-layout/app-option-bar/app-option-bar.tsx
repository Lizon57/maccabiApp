import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { useStoreDispatch } from "../../../hooks/store/use-store-dispatch"
import { useOnClickOutside } from "../../../hooks/use-on-click-outside"
import { useWindowSize } from "../../../hooks/use-window-size"
import { setAppScreenZIndex } from "../../../store/slicer/app-layout-slicer"

import { OPTION_BAR } from "../../../data/app/option-bar"


export const AppOptionBar = () => {
    const [selectOption, setSelectOption] = useState('')
    const dispatch = useStoreDispatch()
    const optionBarRef = useRef<HTMLDivElement>(null)
    const WINDOW_WIDTH = useWindowSize().width

    const onCloseOption = () => {
        if (WINDOW_WIDTH > 550) return
        setSelectOption('')
        dispatch(setAppScreenZIndex(0))
    }

    const onOpenOption = (option: string) => {
        setSelectOption(option)
        dispatch(setAppScreenZIndex(500))
    }

    const onIconClick = (option: string) => {
        if (WINDOW_WIDTH > 550) return
        selectOption === option ? onCloseOption() : onOpenOption(option)
    }

    useOnClickOutside(optionBarRef, () => onIconClick(''))

    return (
        <div className="app-layout--app-option-bar__container" ref={optionBarRef}>
            <ul className="options-list-container">
                {OPTION_BAR.map(option => {
                    return (
                        <li key={option.id} className="category-container">
                            <span className="icon-wrapper">
                                <option.icon onClick={() => onIconClick(option.title)} />
                            </span>
                            <ul
                                className={'links-list-container' + (selectOption === option.title ? ' open' : '')}
                            >
                                {option.childrens.map(link => {
                                    return (
                                        <li key={link.id} className="link-container">
                                            <Link to={link.path}>{link.text}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}