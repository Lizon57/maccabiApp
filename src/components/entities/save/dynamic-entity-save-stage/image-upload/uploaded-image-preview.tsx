import { AiOutlineDelete } from "react-icons/ai"


export const UploadedImagePreview = ({ image, onRemoveImage }: Props) => {
    const backgroundImageStyle = { backgroundImage: `url(${image.imageUrl})` }

    return (
        <div className="entity-save-cmp--uploaded-image-preview__container" style={backgroundImageStyle} title={image.name}>
            <div className="remove" title="הסר תמונה" onClick={() => onRemoveImage(image.id)}><AiOutlineDelete /></div>
            <div
                className="name"
            >{image.name}</div>
        </div>
    )
}


type Props = {
    image: {
        id: string,
        name: string,
        imageUrl: string
    }
    onRemoveImage: (id: string) => void,
}