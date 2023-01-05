import { useLocation } from "react-router-dom"
import { useStoreSelector } from "../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { ItemTitle } from "./item-title"
import { SimpleInfoListList } from "./simple-info-list/simple-info-list-list"
import { BreadCrumbs } from "../../../../common/bread-crumbs/bread-crumbs"


export const DynamicHeadCmp = ({ cmp, entityName }: Props) => {
    const itemName = useStoreSelector(state => state.displayEntityModule).item.entityInfo.name.display
    const path = useLocation().pathname.split('/')[1] || ''

    switch (cmp.type) {
        case 'bread-crumbs':
            return <BreadCrumbs path={[{ text: entityName, link: path }, { text: itemName }]} />

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
    entityName: string
}