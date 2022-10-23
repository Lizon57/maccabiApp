export type EntityAddItemStage = {
    title: string,
    type: string,
    isRequired: boolean,

    option?: PhotoUploadStage
}


type PhotoUploadStage = {
    minPhotoCount?: number,
    maxPhotoCount?: number,
}