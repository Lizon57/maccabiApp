import { GoNote } from "react-icons/go"
import { appMessageProps } from "../../../../types/app-message"
import { CircularProgressBar } from "../../../common/circular-progress-bar/circular-progress-bar"


export const AppMessagePreview = ({ message }: appMessageProps) => {
    return (
        <div className="app-data--message__preview-container">
            <div className="preview-title"><GoNote /> {message.title}</div>
            <div className="preview-text">{message.text}</div>
            <div className="preview-timer">
                <CircularProgressBar type={message.type} />
            </div>
        </div>
    )
}