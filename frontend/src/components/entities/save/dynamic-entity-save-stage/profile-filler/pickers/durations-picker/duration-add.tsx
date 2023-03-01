import { ICON_TYPE_MAP } from "../../../../../../../constans/icon-type-map"


export const DurationAdd = ({ onClick }: Props) => {
    const PlusIcon = ICON_TYPE_MAP.entityItemPreview.plus


    return (
        <div className="entity-save-cmp--profile-filler-duration-add__container" onClick={onClick}>
            <span className="icon-wrapper"><PlusIcon /></span>
            <span className="text">הוסף תקופה</span>
        </div>
    )
}


type Props = {
    onClick: () => void
}