import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../../common/main-title/main-title"
import { ImageGalleryPreview } from "./image-gallery-preview"


export const ImageGalleryList = ({ cmp }: Props) => {
    const { relatedInfo, entityInfo, miniImages } = useStoreSelector(state => state.displayEntityModule.item)

    if (!miniImages?.length) return <></>

    let title = cmp.title
    title = title?.replace('RELATED_PROFILE_NAME', (relatedInfo?.miniProfile?.displayName || ''))
    title = title?.replace('PAGE_NAME', (entityInfo.name.display || ''))


    return (
        <section className="entity-details--image-gallery-cmp__gallery-container">
            <MainTitle text={title || ''} Icon={cmp.Icon} />

            <div className="gallery-container">
                {miniImages.map(miniImage => <ImageGalleryPreview
                    key={miniImage.id}
                    miniImage={miniImage}
                />)}
            </div>
        </section>
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}