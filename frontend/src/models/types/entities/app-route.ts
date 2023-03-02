import { ComponentType, LazyExoticComponent } from "react"

export type AppRoute = {
    id: string
    path: string
    element: (() => JSX.Element) | LazyExoticComponent<ComponentType<any>>
}