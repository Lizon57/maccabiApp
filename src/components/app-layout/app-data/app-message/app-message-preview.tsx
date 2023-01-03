import { BsEmojiSmile } from "react-icons/bs"
import { BsEmojiFrown } from "react-icons/bs"
import { FaHandPointLeft } from "react-icons/fa"

import { AppMessage } from "../../../../types/app/app-message"


const ICON_BY_TYPE_MAP: IconMap = {
    success: <BsEmojiSmile />,
    fail: <BsEmojiFrown />,
    message: <FaHandPointLeft />
}


export const AppMessagePreview = ({ message }: Props) => {
    const { type, title, text } = message
    const icon = ICON_BY_TYPE_MAP[type]

    return (
        <article className="app-data--message__preview-container" title={title}>
            <div className={'preview-title ' + type}>
                <span className="type-icon">{icon}</span>
                <span className="title">{title}</span>
            </div>
            <div className="preview-text">{text}</div>
        </article>
    )
}


type Props = {
    message: AppMessage
}

type IconMap = {
    [key: string]: JSX.Element
}