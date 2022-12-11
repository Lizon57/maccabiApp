import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { ItemTitle } from "./item-title"
import { SimpleInfoListList } from "./simple-info-list/simple-info-list-list"


export const DynamicHeadCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'page-title':
            return <ItemTitle cmp={cmp} />

        case 'simple-info-list':
            return <SimpleInfoListList cmp={cmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}