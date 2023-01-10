import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { SimpleInfoListPreview } from "./simple-info-list-preview"


export const SimpleInfoListList = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)


    if (!cmp.infos?.length) return <></>

    return (
        <div className="entity-details--simple-info-list-list__container">
            {cmp.infos.map(info => <SimpleInfoListPreview key={info.value} info={info} item={item} />)}
        </div>
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}