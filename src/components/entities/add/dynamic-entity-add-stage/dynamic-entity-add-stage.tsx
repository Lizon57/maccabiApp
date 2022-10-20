import { EntityItemAddStage } from "../../../../types/entity/add/entity-item-add-stage"
import { PhotoUploader } from "./photo-uploader/photo-uploader"

export const DynamicEntityAddStage = ({ stage, entityName, onStageFullfill }: Props) => {
    switch (stage.type) {
        case 'photo-uploader':
            return <PhotoUploader
                entityName={entityName}
                minPhotoNumber={stage?.minPhotoNumber}
                onStageFullfill={onStageFullfill}
            />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityItemAddStage,
    entityName: string,
    onStageFullfill: (data: any, stageType: string) => void

}