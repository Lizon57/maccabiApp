export type EntityAddItemStage = {
    title: string,
    type: string,
    isRequired: boolean,

    option?: PhotoUploadStage | AssociateRelatedDataStage
}


type PhotoUploadStage = {
    minPhotoCount?: number,
    maxPhotoCount?: number,
}


type AssociateRelatedDataStage = {
    relateds: { type: string, isRequired: boolean }[]
}