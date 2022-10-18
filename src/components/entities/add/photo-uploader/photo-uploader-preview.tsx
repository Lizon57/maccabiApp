import { useEffect, useRef, useState } from "react"

import { cloudinaryService } from "../../../../services/cloudinary-service"

import { Loader } from "../../../common/loader/loader"
import { ErrorMessage } from "../../../common/error-message/error-message"


export const PhotoUploaderPreview = ({ file, delay, path }: Props) => {
    const [isUploading, setIsUploading] = useState(true)
    const [isUploadFail, setIsUploadFail] = useState(false)
    const [fileDetails, setFileDetails] = useState<UploadedFile>()
    const [isEditUploadFileName, setIsEditUploadFileName] = useState(false)


    useEffect(() => {
        setTimeout(async () => {
            const res = await cloudinaryService.fetchRequest(file, path)
            if (res.secure_url) {
                const uploadedFile = {
                    url: res.secure_url,
                    name: res.original_filename
                }
                setFileDetails(uploadedFile)
            } else {
                setIsUploadFail(true)
            }

            setIsUploading(false)
        }, delay)
    }, [file, delay, path])


    const EL_UPLOADED_PHOTO_NAME_REF = useRef<HTMLSpanElement>(null)
    const onUploadedPhotoNameEdit = () => {
        setIsEditUploadFileName(false)
        if (!fileDetails?.name) return

        const newName = EL_UPLOADED_PHOTO_NAME_REF?.current?.innerText || fileDetails?.name

        if (newName === fileDetails?.name) return
        else setFileDetails({ ...fileDetails, name: newName })
    }


    if (isUploading) return <Loader text="מעלה קובץ, אנא המתן..." />
    if (isUploadFail) return <ErrorMessage message="שגיאה בהעלאת קובץ, אנא נסה שנית." />

    return (
        <div className="entity-add-cmp--photo-uploader-preview__container">
            <div
                className="photo-uploaded"
                style={{ backgroundImage: `url(${fileDetails?.url})` }}
                title={fileDetails?.name}
            >

                <span
                    className={"name" + (isEditUploadFileName ? ' active' : '')}
                    title="לחץ לעריכת שם הקובץ"
                    ref={EL_UPLOADED_PHOTO_NAME_REF}
                    onClick={() => setIsEditUploadFileName(true)}
                    onBlur={onUploadedPhotoNameEdit}
                    suppressContentEditableWarning={true}
                    contentEditable
                >
                    {fileDetails?.name}
                </span>
            </div>
        </div>
    )
}


type Props = {
    file: File,
    delay: number,
    path: string,
}

type UploadedFile = {
    url: string,
    name: string,
}