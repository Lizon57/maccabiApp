import { useSelector } from "react-redux"
import { RootState } from "../../../../../../store/store"

import { SimpleProfileEntityDetailsCmp } from "../../../../../../models/interfaces/entities/entity-details-structure-cmp/simpe-profile-entity-details-cmp"

import { RenderByDeviceWidth } from "../../../../../common/render-by/render-by-device-width"
import { ItemTitle } from "../item-title"
import { SimpleInfoListList } from "../simple-info-list/simple-info-list-list"


export const SimpleProfile = ({ cmp }: Props) => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const { id: imageId, name: imageName, imageUrl } = item.miniImages[0]

    const simpleListCmp = { type: '', title: '', infos: cmp.infos }


    return (
        <div className="entity-details--simple-profile__container">
            {cmp.title && <ItemTitle cmp={cmp} />}

            <div className="image" title={imageName} style={{ backgroundImage: `url(${imageUrl})` }}>
                <RenderByDeviceWidth maxDeviceWide="mobile">
                    <img src={imageUrl} alt={imageName} title={imageName} />
                </RenderByDeviceWidth>
            </div>

            <SimpleInfoListList cmp={simpleListCmp} />
        </div>
    )
}


type Props = {
    cmp: SimpleProfileEntityDetailsCmp
}