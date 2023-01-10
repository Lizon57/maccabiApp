import { useSelector } from "react-redux"
import { RootState } from "../../../../../store/store"

import { getFormatedList } from "../../../../../services/util/get-formated-list"

import { EntityDetailsStuctureCmp } from "../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../common/main-title/main-title"


export const ItemTitle = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)


    let title = cmp.title
    title = title?.replace('RELATED_PROFILE_NAME', (item.relatedInfo?.miniProfile?.displayName || ''))
    title = title?.replace('PAGE_NAME', (item.entityInfo.name.display || ''))
    if (!item.entityInfo.item?.writers?.length) title = title?.replace('מאת BY_WRITERS', '')
    title = title?.replace('BY_WRITERS', (getFormatedList(item.entityInfo.item?.writers || [])))


    return (
        <MainTitle text={title || ''} Icon={cmp.Icon} isSticky />
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}