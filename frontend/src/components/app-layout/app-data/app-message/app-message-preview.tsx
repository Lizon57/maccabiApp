import classNames from "classnames"

import { ICON_TYPE_MAP } from "../../../../constans/icon-type-map"

import { AppMessage } from "../../../../types/app/app-message"


export const AppMessagePreview = ({ message }: Props) => {
    const { type, title, text } = message
    const Icon = ICON_TYPE_MAP.appMessage[type]

    return (
        <article className="app-data--message__preview-container" title={title}>
            <div className={classNames('preview-title', type)}>
                <span className="type-icon"><Icon /></span>
                <span className="title">{title}</span>
            </div>
            <div className="preview-text">{text}</div>
        </article>
    )
}


type Props = {
    message: AppMessage
}