export type EntityAddItemStage = {
    title: string,
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