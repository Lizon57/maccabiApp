export type appMessageType = {
    id: string,
    type: string,
    title: string,
    text: string
}

export type appMessageProps = {
    message: appMessageType,
    className?: string,
}