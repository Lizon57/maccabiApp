import { useRef, useState } from "react"

import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { setAppScreenZIndex } from "../../../store/action/app-layout-action"

import { useOnClickOutside } from "../../../hooks/use-on-click-outside"
import { useWindowSize } from "../../../hooks/use-window-size"

import { AppOptionRestriction } from "../../../models/types/app/app-option-link/app-option-restriction"

import { OPTION_BAR } from "../../../data/app/option-bar"

import { AppOptionPreview } from "./app-option-preview"


export const AppOptionBar = () => {
    const { user } = useSelector((state: RootState) => state.userStateModule)
    const { pageType } = useSelector((state: RootState) => state.appLayoutModule)
    const [selectOption, setSelectOption] = useState('')
    const elOptionBar = useRef<HTMLUListElement>(null)
    const { width: windowWidth } = useWindowSize()

    const isLargeScreen = (windowWidth > 550)

    const onCloseOption = () => {
        if (!isLargeScreen) setSelectOption('')
    }
    useOnClickOutside(elOptionBar, onCloseOption)

    const onOpenOption = (option: string) => {
        setSelectOption(option)
        setAppScreenZIndex(499)
    }

    const onIconClick = (option: string) => {
        if (isLargeScreen) return
        selectOption === option ? onCloseOption() : onOpenOption(option)
    }

    const getShouldOptionRender = (restriction: AppOptionRestriction | undefined) => {
        if (!restriction) return true
        let shouldRender = true

        const restrictionTypes = Object.keys(restriction)
        restrictionTypes.forEach(restrictionKey => {
            switch (restrictionKey) {
                case 'pageTypes':
                    if (!restriction[restrictionKey]?.some(restriction => (restriction === pageType))) shouldRender = false
                    break

                case 'users':
                    restriction[restrictionKey]?.forEach(restriction => {
                        switch (restriction) {
                            case 'logged-real-user':
                                if (!user?._id) shouldRender = false
                                break

                            case 'no-logged-real-user':
                                if (!!user?._id) shouldRender = false
                                break
                        }
                    })
            }
        })

        return shouldRender
    }


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
                                {option.childrens.map(({ id, path, text, isRelative, action, restriction }) => {
                                    const shouldOptionRender = getShouldOptionRender(restriction)
                                    const appOptionPreviewProps = { path, text, isRelative, action, onCloseOption }
                                    return shouldOptionRender
                                        ? <AppOptionPreview
                                            key={id}
                                            {...appOptionPreviewProps}
                                        />
                                        : null
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}