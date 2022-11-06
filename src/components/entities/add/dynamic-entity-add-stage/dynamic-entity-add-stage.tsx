import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { PhotoUpload } from "./photo-upload/photo-upload"
import { AssociateRelatedData } from "./associate-related-data/associate-related-data"


export const DynamicEntityAddStage = ({ stage, entityName, onCompleteStage }: Props) => {
    switch (stage.type) {
        case 'photo-upload':
            return <PhotoUpload
                entityName={entityName}
                minPhotoCount={stage.option?.minPhotoCount || 0}
                maxPhotoCount={stage.option?.maxPhotoCount || Infinity}
                onCompleteStage={onCompleteStage}
            />

        case 'associate-related-data':
            if (!stage?.option?.relateds?.length) return null
            return <AssociateRelatedData
                relateds={stage.option.relateds}
                onCompleteStage={onCompleteStage}
            />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityAddItemStage,
    entityName: string,
    onCompleteStage: () => void
}