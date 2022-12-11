import { useStoreSelector } from "../../../../../../hooks/store/use-store-selector"

import { EntityDetailsStuctureCmp } from "../../../../../../types/entity/details/entity-details-structure-cmp"

import { MainTitle } from "../../../../../common/main-title/main-title"
import { ImagePreview } from "./image-preview"


export const ImageGallery = ({ cmp }: Props) => {
    const { item } = useStoreSelector(state => state.displayEntityModule)

    cmp.title = cmp.title.replace('RELATED_PROFILE_NAME', (item.relatedInfo?.miniProfile?.displayName || ''))
    cmp.title = cmp.title.replace('PAGE_NAME', (item.entityInfo.name.display || ''))

    return (
        <>
            <MainTitle text={cmp.title} Icon={cmp.Icon} />

            <div className="entity-details--image-gallery-cmp__gallery-container">
                {item.miniImages?.map(miniImage => <ImagePreview
                    key={miniImage.id}
                    miniImage={miniImage}
                />)}
            </div>
        </>
    )
}


type Props = {
    cmp: EntityDetailsStuctureCmp
}