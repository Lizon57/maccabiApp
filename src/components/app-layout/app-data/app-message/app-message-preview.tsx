import { BsEmojiSmile } from "react-icons/bs"
import { BsEmojiFrown } from "react-icons/bs"
import { FaHandPointLeft } from "react-icons/fa"

import { appMessageProps } from "../../../../types/app-message"


const getIcon = (type: string) => {
    switch (type) {
        case 'success':
            return <BsEmojiSmile />

        case 'fail':
            return <BsEmojiFrown />

        case 'message':
            return <FaHandPointLeft />

        default: return
    }
}


export const AppMessagePreview = ({ message }: appMessageProps) => {
    return (
        <div className="app-data--message__preview-container">
            <div className={"preview-title " + message.type}>
                <span className="type-icon">{getIcon(message.type)}</span>
                <span className="title">{message.title}</span>
            </div>
            <div className="preview-text">{message.text}</div>
        </div>
    )
}