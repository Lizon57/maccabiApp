import { useState } from "react"
import classNames from "classnames"

import { FixedLengthArray } from "../../../models/types/typescript/fixed-length-array"


export const TextToggler = ({ options, onToggleCallBack }: Props) => {
    const [isFirstOptionActive, setIsFirstOptionActive] = useState(true)

    const onTogglerClick = () => {
        onToggleCallBack && onToggleCallBack()
        setIsFirstOptionActive(!isFirstOptionActive)
    }

    return (
        <div className="common-cmp--text_toggler__container" onClick={onTogglerClick}>
            <input type="checkbox" />
            <span className={classNames('option', { active: isFirstOptionActive })}>{options[0]}</span>
            <span className={classNames('option', { active: !isFirstOptionActive })}>{options[1]}</span>
            <span className="indicator"></span>
        </div >
    )
}


type Props = {
    options: FixedLengthArray<string, 2>
    onToggleCallBack: () => void
}