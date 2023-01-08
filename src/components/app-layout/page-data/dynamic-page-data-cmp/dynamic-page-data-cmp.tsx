import { EntityItemTOC } from "./EntityItemToc"
import { SocialNetworkPreview } from "./social-network-preview"


export const DynamicPageDataCmp = ({ type }: Props) => {
    switch (type) {
        case 'social-network-preview':
            return <SocialNetworkPreview />

        case 'entity-item-toc':
            return <EntityItemTOC />

        default:
            return <div>{type}</div>
    }
}


type Props = {
    type: string
}