export type EntityAddItemStage = {
    title: string,
    type: string,
    isRequire: boolean,

    option?: PhotoUploadOption & AssociateRelatedDataOption
}


export type PhotoUploadOption = {
    minPhotoCount?: number,
    maxPhotoCount?: number,
}


export type AssociateRelatedDataOption = {
    relateds?: { type: string, isRequire: boolean }[]
}