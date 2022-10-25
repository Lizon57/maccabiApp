import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { PhotoUpload } from "./photo-upload/photo-upload"
import { AssociateRelatedData } from "./associate-related-data/associate-related-data"


export const DynamicEntityAddStage = ({ stage, entityName }: Props) => {
    switch (stage.type) {
        case 'photo-upload':
            return <PhotoUpload
                entityName={entityName}
            />

        case 'associate-related-data':
            if (!stage?.option?.relateds?.length) return null
            return <AssociateRelatedData relateds={stage.option.relateds} />

        default:
            return <></>
    }
}


type Props = {
    stage: EntityAddItemStage,
    entityName: string,
}