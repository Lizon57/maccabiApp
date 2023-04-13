import { useSelector } from "react-redux"
import { RootState } from "../../../../../store/store"

import { getFormattedList } from "../../../../../services/util/get-formatted-list"

import { BasicEntityDetailsStructureCmp } from "../../../../../models/interfaces/entities/entity-details-structure-cmp/basic-entity-details-structure-cmp"

import { MainTitle } from "../../../../common/main-title/main-title"


export const ItemTitle = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)


    let title = cmp.title
    title = title?.replace('RELATED_PROFILE_NAME', (item.relatedInfo?.miniProfile?.displayName || ''))
    title = title?.replace('PAGE_NAME', (item.entityInfo.name.display || ''))
    if (!item.entityInfo.item?.writers?.length) title = title?.replace('מאת BY_WRITERS', '')
    title = title?.replace('BY_WRITERS', (getFormattedList(item.entityInfo.item?.writers || [])))


    return (
        <MainTitle text={title || ''} Icon={cmp.Icon} isSticky />
    )
}


type Props = {
    cmp: BasicEntityDetailsStructureCmp
}