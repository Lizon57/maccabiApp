import { EntitySaveItemStage } from "../../../../types/entity/save/entity-save-item-stage"

import { DynamicAssociatePickerList } from "./associate-related-data/dynamic-associate-picker-list"
import { ImageUpload } from "./image-upload/image-upload"
import { PageDetails } from "./page-details/page-details"


export const DynamicEntitySaveStage = ({ stage, entityName }: Props) => {
    switch (stage.type) {
        case 'page-details':
            return <PageDetails />

        case 'image-upload':
            return <ImageUpload
                entityName={entityName}
                minImageCount={stage.option?.minImageCount}
                maxImageCount={stage.option?.maxImageCount}
            />

        case 'associate-related-data':
            return <DynamicAssociatePickerList
                relateds={stage.option?.relateds || []}
            />

        default: return null
    }
}


type Props = {
    stage: EntitySaveItemStage,
    entityName: string
}