import { useState, useRef, useEffect } from "react"
import { IconType } from "react-icons"

import { useOnClickOutside } from "../../../hooks/use-on-click-outside"

import { eventBus } from "../../../services/event-bus-service"


export const Dropdown = ({ controllerText, controllerIcon: Icon, title, children }: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

    const elDropdown = useRef<HTMLDivElement>(null)
    useOnClickOutside(elDropdown, () => setIsDropdownOpen(false))

    useEffect(() => {
        const unsubscribeCloseDropdown = eventBus.on('closeDropdown', () => {
            setIsDropdownOpen(false)
        })

        return () => {
            unsubscribeCloseDropdown()
        }
    }, [])


    return (
        <div className="common-cmp--dropdown__container" ref={elDropdown}>
            <div className="toggler" title={title} onClick={toggleDropdown}>
                {controllerText && <span>{controllerText}</span>}
                {Icon && <Icon />}
            </div>

            {isDropdownOpen && <div className="dropdown-container">
                <div className="title">{title}</div>
                <div className="children-container">{children}</div>
            </div>}
        </div>
    )
}


type Props = {
    controllerText?: string
    controllerIcon?: IconType
    title?: string
    children: JSX.Element
}