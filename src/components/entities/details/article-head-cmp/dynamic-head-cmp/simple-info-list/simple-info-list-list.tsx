import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { SimpleInfoListPreview } from "./simple-info-list-preview"


export const SimpleInfoListList = ({ cmp }: Props) => {
    const { item } = useStoreSelector(state => state.displayEntityModule)


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