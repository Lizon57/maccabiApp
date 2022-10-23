import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { PhotoUploader } from "./photo-uploader/photo-uploader"


export const DynamicEntityAddStage = ({ stage, entityName, onStageFullfill }: Props) => {
    switch (stage.type) {
        case 'photo-uploader':
            return <PhotoUploader
                entityName={entityName}
                minPhotoNumber={stage?.option?.minPhotoCount}
                onStageFullfill={onStageFullfill}
            />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityAddItemStage,
    entityName: string,
    onStageFullfill: (data: any, stageType: string) => void

}