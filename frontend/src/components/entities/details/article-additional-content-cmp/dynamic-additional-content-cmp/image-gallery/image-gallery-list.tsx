import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { KeySpecifyBasicEntityDetailsStructureCmp } from "../../../../../../models/interfaces/entities/entity-details-structure-cmp/key-specify-basic-entity-details-structure-cmp"

import { MainTitle } from "../../../../../common/main-title/main-title"
import { ImageGalleryPreview } from "./image-gallery-preview"
import { getValueByDynamicKey } from "../../../../../../services/util/get-value-by-dynamic-key"


export const ImageGalleryList = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const miniImages = getValueByDynamicKey(cmp.key || '', item)

    let { relatedInfo, entityInfo } = useSelector((state: RootState) => state.displayEntityItemModule.item)
    if (!miniImages?.length) return null


    let title = cmp.title
    title = title?.replace('RELATED_PROFILE_NAME', (relatedInfo?.miniProfile?.displayName || ''))
    title = title?.replace('PAGE_NAME', (entityInfo?.name?.display || item.name?.display || ''))


    return (
        <section className="entity-details--image-gallery-cmp__gallery-container">
            <MainTitle text={title || ''} Icon={cmp.Icon} />

            <div className="gallery-container">
                {(miniImages as MiniImages).map(miniImage => <ImageGalleryPreview
                    key={miniImage.id}
                    miniImage={miniImage}
                />)}
            </div>
        </section>
    )
}


type Props = {
    cmp: KeySpecifyBasicEntityDetailsStructureCmp
}


type MiniImages = {
    id: string
    name: string
    imageUrl: string
}[]