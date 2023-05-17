import { EntityItemTOC } from "./entity-item-toc"
import { JoinUs } from "./join-us"


export const DynamicPageDataCmp = ({ type }: Props) => {
    switch (type) {
        case 'join-us':
            return <JoinUs />

        case 'entity-item-toc':
            return <EntityItemTOC />

        default:
            return <div>{type}</div>
    }
}


type Props = {
    type: string
}