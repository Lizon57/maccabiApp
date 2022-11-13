import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { ImageUpload } from "./photo-upload/image-upload"
import { AssociateRelatedData } from "./associate-related-data/associate-related-data"


export const DynamicEntityAddStage = ({ stage, entityName, tempItem, onCompleteStage }: Props) => {
    switch (stage.type) {
        case 'image-upload':
            return <ImageUpload
                entityName={entityName}
                minImageCount={stage.option?.minImageCount || 0}
                maxImageCount={stage.option?.maxImageCount || Infinity}
                tempItem={tempItem}
                onCompleteStage={onCompleteStage}
            />

        case 'associate-related-data':
            if (!stage?.option?.relateds?.length) return null
            return <AssociateRelatedData
                relateds={stage.option.relateds}
                tempItem={tempItem}
                onCompleteStage={onCompleteStage}
            />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityAddItemStage,
    entityName: string,
    tempItem: any,
    onCompleteStage: (data: Object) => void,
}