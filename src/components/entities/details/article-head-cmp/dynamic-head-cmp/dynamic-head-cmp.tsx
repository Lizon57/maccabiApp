import { useLocation } from "react-router-dom"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../store/store"

import { EntityDetailsStructureCmp } from "../../../../../models/combiners/entities/entity-details-structure-cmp"
import { SimpleListEntityDetailsCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/simple-list-entity-details-cmp"
import { SimpleProfileEntityDetailsCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/simpe-profile-entity-details-cmp"

import { ItemTitle } from "./item-title"
import { SimpleInfoListList } from "./simple-info-list/simple-info-list-list"
import { BreadCrumbs } from "../../../../common/bread-crumbs/bread-crumbs"
import { SimpleProfile } from "./simple-profile/simple-profile"


export const DynamicHeadCmp = ({ cmp, entityName }: Props) => {
    const { display: itemName } = useSelector((state: RootState) => state.displayEntityItemModule.item.entityInfo.name)
    const path = useLocation().pathname.split('/')[1] || ''

    switch (cmp.type) {
        case 'bread-crumbs':
            return <BreadCrumbs path={[{ text: entityName, link: path }, { text: itemName }]} />

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
    entityName: string
}