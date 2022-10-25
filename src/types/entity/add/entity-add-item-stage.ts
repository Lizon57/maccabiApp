export type EntityAddItemStage = {
    title: string,
    type: string,
    isRequired: boolean,

    option?: PhotoUploadOption & AssociateRelatedDataOption
}


export type PhotoUploadOption = {
    minPhotoCount?: number,
    maxPhotoCount?: number,
}


export type AssociateRelatedDataOption = {
    relateds?: string[]
}