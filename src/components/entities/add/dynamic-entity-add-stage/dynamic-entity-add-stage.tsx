import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"
import { PhotoUpload } from "./photo-upload/photo-upload"

// import { PhotoUploader } from "./photo-uploader/photo-uploader"


export const DynamicEntityAddStage = ({ stage, entityName }: Props) => {
    switch (stage.type) {
        case 'photo-upload':
            // return <PhotoUploader
            //     entityName={entityName}
            //     minPhotoNumber={stage?.option?.minPhotoCount}
            // />
            return <PhotoUpload entityName={entityName} />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityAddItemStage,
    entityName: string,
}