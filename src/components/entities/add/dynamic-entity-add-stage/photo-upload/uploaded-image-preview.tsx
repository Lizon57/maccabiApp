import { useRef } from "react"
import { AiOutlineDelete } from "react-icons/ai"

import { ImageEntityItem } from "../../../../../types/entity/entities/image-entity-item"


export const UploadedImagePreview = ({ image, setNewImageName, onRemoveImage }: Props) => {
    const EL_NAME_REF = useRef<HTMLDivElement>(null)
    const onSetNewName = () => {
        const newName = EL_NAME_REF?.current?.innerText || image.entityInfo.name.display
        if (newName === image.entityInfo.name.display) return
        const newImage = structuredClone(image)
        image.entityInfo.name.display = newName
        setNewImageName(newImage)
    }


    const backgroundImageStyle = { backgroundImage: `url(${image.entityInfo.imageUrl})` }

    return (
        <div className="entity-add-cmp--uploaded-image-preview__container" style={backgroundImageStyle} title={image.entityInfo.name.display}>
            <div className="remove" title="הסר תמונה" onClick={() => onRemoveImage(image)}><AiOutlineDelete /></div>
            <div
                className="name"
                onBlur={onSetNewName}
                ref={EL_NAME_REF}
                title="ערוך את שם הקובץ"
                suppressContentEditableWarning={true}
                contentEditable
            >{image.entityInfo.name.display}</div>
        </div>
    )
}


type Props = {
    image: ImageEntityItem,
    onRemoveImage: (image: ImageEntityItem) => void,
    setNewImageName: (image: ImageEntityItem) => void
}