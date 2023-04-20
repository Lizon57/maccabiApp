import { EntityDetailsStructureCmp } from "../../../../../models/combiners/entities/entity-details-structure-cmp"
import { SimpleProfileEntityDetailsCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/simpe-profile-entity-details-cmp"
import { KeySpecifyBasicEntityDetailsStructureCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/key-specify-basic-entity-details-structure-cmp"

import { ItemTitle } from "./item-title"
import { SimpleProfile } from "./simple-profile/simple-profile"
import { CategoriesEntityItemsList } from "./categories-entity-items/categories-entity-items-list"


export const DynamicHeadCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'page-title':
            return <ItemTitle cmp={cmp} />

        case 'simple-profile':
            return <SimpleProfile cmp={cmp as SimpleProfileEntityDetailsCmp} />

        case 'categories-entity-items':
            return <CategoriesEntityItemsList cmp={cmp as KeySpecifyBasicEntityDetailsStructureCmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStructureCmp
}