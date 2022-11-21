import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { ItemTitle } from "./item-title"


export const DynamicHeadCmp = ({ cmp }: Props) => {
    switch (cmp.type) {
        case 'page-title':
            return <ItemTitle cmp={cmp} />

        default:
            return <></>
    }
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}