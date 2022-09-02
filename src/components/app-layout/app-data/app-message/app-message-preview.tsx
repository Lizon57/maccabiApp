import { appMessageProps } from "../../../../types/app-message"

export const AppMessagePreview = ({ message }: appMessageProps) => {
    return (
        <div className="app-data--message__preview-container">
            <div className={"preview-title " + message.type}>{message.title}</div>
            <div className="preview-text">{message.text}</div>
        </div>
    )
}