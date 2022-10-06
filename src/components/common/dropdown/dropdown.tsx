import { useState, useRef } from "react"

import { IconType } from "react-icons"
import { useOnClickOutside } from "../../../hooks/use-on-click-outside"


export const Dropdown = ({ controllerText, controllerIcon: Icon, title, children }: propsType) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)


    const EL_DROPDOWN_CONTAINER = useRef<HTMLDivElement>(null)
    useOnClickOutside(EL_DROPDOWN_CONTAINER, () => setIsDropdownOpen(false))


    return (
        <div className="common-cmp--dropdown__container" ref={EL_DROPDOWN_CONTAINER}>
            <div className="toggler" title={title} onClick={toggleDropdown}>
                {controllerText && controllerText}
                {Icon && <Icon />}
            </div>

            {isDropdownOpen && <div className="dropdown-container">
                <div className="title">{title}</div>
                <div className="children-container">{children}</div>
            </div>}
        </div>
    )
}


type propsType = {
    controllerText?: string,
    controllerIcon?: IconType,
    title?: string,
    children: JSX.Element,
}