export type appMessage = {
    id: string,
    type: string,
    title: string,
    text: string
}

export type appMessageProps = {
    message: appMessage,
    className?: string,
}