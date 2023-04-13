import { EntityDetailsStructureCmp } from "../../../../../models/combiners/entities/entity-details-structure-cmp"
import { SimpleProfileEntityDetailsCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/simpe-profile-entity-details-cmp"

import { ItemTitle } from "./item-title"
import { SimpleProfile } from "./simple-profile/simple-profile"


export const DynamicHeadCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'page-title':
            return <ItemTitle cmp={cmp} />

        case 'simple-profile':
            return <SimpleProfile cmp={cmp as SimpleProfileEntityDetailsCmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStructureCmp
}