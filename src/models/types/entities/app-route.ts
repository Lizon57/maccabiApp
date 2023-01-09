export type AppRoute = {
    id: string
    path: string
    element: (() => JSX.Element)
}