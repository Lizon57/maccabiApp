import { useRef } from "react"
import { AiOutlineDelete } from "react-icons/ai"


export const UploadedPhotoPreview = ({ photo, setNewPhotoName, onRemovePhoto }: Props) => {
    const EL_NAME_REF = useRef<HTMLDivElement>(null)
    const onSetNewName = () => {
        const newName = EL_NAME_REF?.current?.innerText || photo.name
        if (newName === photo.name) return
        setNewPhotoName({ ...photo, name: newName })
    }


    const backgroundImageStyle = { backgroundImage: `url(${photo.url})` }

    return (
        <div className="entity-add-cmp--uploaded-photo-preview__container" style={backgroundImageStyle} title={photo.name}>
            <div className="remove" title="הסר תמונה" onClick={() => onRemovePhoto(photo)}><AiOutlineDelete /></div>
            <div
                className="name"
                onBlur={onSetNewName}
                ref={EL_NAME_REF}
                title="ערוך את שם הקובץ"
                suppressContentEditableWarning={true}
                contentEditable
            >{photo.name}</div>
        </div>
    )
}


type Props = {
    photo: Photo,
    onRemovePhoto: (photo: Photo) => void,
    setNewPhotoName: (photo: Photo) => void
}


type Photo = {
    url: string,
    name: string
}