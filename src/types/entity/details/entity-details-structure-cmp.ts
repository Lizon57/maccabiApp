import { IconType } from "react-icons"


export type EntityDetailsStuctureCmp = {
    type: string
    title?: string,
    Icon?: IconType,

    infos?: {
        title: string,
        value: string
    }[]
}