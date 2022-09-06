import { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { useOnClickOutside } from "../../../hooks/use-on-click-outside"
import { APP_OPTION_BAR_OPTIONS } from "./data"


export const AppOptionBar = () => {
    const [selectOption, setSelectOption] = useState('')

    const optionBarRef = useRef<HTMLDivElement>(null)
    const closeBar = () => setSelectOption('')
    useOnClickOutside(optionBarRef, closeBar)

    const handleIconClick = (option: string) => selectOption === option ? closeBar() : setSelectOption(option)

    return (
        <div className="app-layout--app-option-bar__container" ref={optionBarRef}>
            <ul className="options-list-container">
                {APP_OPTION_BAR_OPTIONS.map(option => {
                    return (
                        <li key={option.id} className="category-container">
                            <span className="icon-wrapper">
                                <option.icon onClick={() => handleIconClick(option.title)} />
                            </span>
                            <ul
                                className={'links-list-container' + (selectOption === option.title ? ' open' : '')}
                                onClick={closeBar}
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