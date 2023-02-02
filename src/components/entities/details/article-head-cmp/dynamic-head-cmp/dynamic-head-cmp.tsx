import { EntityDetailsStructureCmp } from "../../../../../models/combiners/entities/entity-details-structure-cmp"
import { SimpleListEntityDetailsCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/simple-list-entity-details-cmp"
import { SimpleProfileEntityDetailsCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/simpe-profile-entity-details-cmp"

import { ItemTitle } from "./item-title"
import { SimpleInfoListList } from "./simple-info-list/simple-info-list-list"
import { SimpleProfile } from "./simple-profile/simple-profile"


export const DynamicHeadCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'page-title':
            return <ItemTitle cmp={cmp} />

        case 'simple-profile':
            return <SimpleProfile cmp={cmp as SimpleProfileEntityDetailsCmp} />

        case 'simple-info-list':
            return <SimpleInfoListList cmp={cmp as SimpleListEntityDetailsCmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStructureCmp
}