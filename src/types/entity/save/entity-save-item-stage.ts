import { IconType } from "react-icons"


export type EntitySaveItemStage = {
    title: string,
    icon?: IconType
    type: string,
    isRequire: boolean,

    option?: PhotoUploadOption & AssociateRelatedDataOption
}


export type PhotoUploadOption = {
    minImageCount?: number,
    maxImageCount?: number,
}


export type AssociateRelatedDataOption = {
    relateds?: { type: string, isRequire: boolean }[]
}