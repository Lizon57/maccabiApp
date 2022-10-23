import { useEffect } from "react"

import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { PhotoUpload } from "./photo-upload/photo-upload"


export const DynamicEntityAddStage = ({ stage, entityName, onStageComplete }: Props) => {
    useEffect(() => {
        const isCompleteStage = () => {
            switch (stage.type) {
                case 'photo-uploader':
                    if (!stage.option?.minPhotoCount) return false
                    // if (uploadedPhotos >= minPhotoCount) return true
                    break

                default:
                    return true
            }
        }

        isCompleteStage()
    }, [stage.type, stage.option?.minPhotoCount])


    switch (stage.type) {
        case 'photo-upload':
            return <PhotoUpload entityName={entityName} />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityAddItemStage,
    entityName: string,
    onStageComplete:  () => void
}