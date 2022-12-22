import { IconType } from "react-icons"


export type EntitySaveItemStage = {
    title: string,
    icon?: IconType
    type: string,
    isRequire: boolean,

    option?: PhotoUploadOption & AssociateRelatedDataOption & ProfileFillerOption
}


type PhotoUploadOption = {
    minImageCount?: number,
    maxImageCount?: number,
}


type AssociateRelatedDataOption = {
    relateds?: {
        type: string,
        isRequire: boolean
    }[]
}

type ProfileFillerOption = {
    infos?: {
        type: string,
        key: string,
        title: string,
        isRequire: boolean,

        option?: {
            delimiter?: string,
            min?: number,
            max?: number
        }
    }[]
}