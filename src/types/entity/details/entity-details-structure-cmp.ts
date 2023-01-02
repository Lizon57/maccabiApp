import { IconType } from "react-icons"


export type EntityDetailsStuctureCmp = {
    type: string
    title?: string
    Icon?: IconType

    infos?: {
        type: string
        title: string
        value: string
    }[]
}