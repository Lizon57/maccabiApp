import { AiOutlineDelete } from "react-icons/ai"


export const UploadedImagePreview = ({ image, onRemoveImage }: Props) => {
    const { imageUrl, name, id } = image

    const backgroundImageStyle = { backgroundImage: `url(${imageUrl})` }

    return (
        <div className="entity-save-cmp--uploaded-image-preview__container" style={backgroundImageStyle} title={name}>
            <div className="remove" title="הסר תמונה" onClick={() => onRemoveImage(id)}><AiOutlineDelete /></div>
            <div className="name">{name}</div>
        </div>
    )
}


type Props = {
    image: {
        id: string
        name: string
        imageUrl: string
    }
    onRemoveImage: (id: string) => void
}