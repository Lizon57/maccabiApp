import { BsHandThumbsUp } from "react-icons/bs"
import { BsHandThumbsDown } from "react-icons/bs"
import { BiMessageAltDetail } from "react-icons/bi"

import { appMessageProps } from "../../../../types/app-message"


const getIcon = (type: string) => {
    switch (type) {
        case 'success':
            return <BsHandThumbsUp />

        case 'fail':
            return <BsHandThumbsDown />

        case 'message':
            return <BiMessageAltDetail />

        default: return
    }
}


export const AppMessagePreview = ({ message }: appMessageProps) => {
    return (
        <div className="app-data--message__preview-container">
            <div className="preview-title">{getIcon(message.type)} {message.title}</div>
            <div className="preview-text">{message.text}</div>
        </div>
    )
}