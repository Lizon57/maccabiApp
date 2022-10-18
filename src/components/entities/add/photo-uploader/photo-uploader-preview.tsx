import { useEffect, useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { RiErrorWarningLine } from "react-icons/ri"

import { cloudinaryService } from "../../../../services/cloudinary-service"

import { Loader } from "../../../common/loader/loader"
import { ErrorMessage } from "../../../common/error-message/error-message"


export const PhotoUploaderPreview = ({ file, delay, path }: Props) => {
    const [fileStatus, setFileStatus] = useState(0)
    const [fileDetails, setFileDetails] = useState<UploadedFile>()


    useEffect(() => {
        setTimeout(async () => {
            const res = await cloudinaryService.fetchRequest(file, path)
            if (res.secure_url) {
                const uploadedFile = {
                    url: res.secure_url,
                    name: res.original_filename
                }
                setFileDetails(uploadedFile)
                setFileStatus(1)
            } else {
                setFileStatus(500)
            }
        }, delay)
    }, [file, delay, path])


    return (
        <div className="entity-add-cmp--photo-uploader-preview__container">
            {!fileStatus && <Loader text="מעלה קובץ, אנא המתן..." />}

            {fileStatus === 500 && <ErrorMessage message="שגיאה בהעלאת קובץ, אנא נסה שנית מאוחר יותר..." />}

            {fileStatus && (fileStatus !== 500) && <div
                className={"photo-uploaded" + (fileStatus === 1 ? ' incomplete' : '')}
                style={{ backgroundImage: `url(${fileDetails?.url})` }}
                title={'תמונה שהועלתה: ' + fileDetails?.name}
            >
                {fileStatus !== 1 &&
                    <span className="status-complete" title="תמונה הוזנה למערכת בהצלחה">
                        <AiOutlineCheck />
                    </span>
                }

                <span className="name">{fileDetails?.name}</span>
            </div>}

            {fileStatus === 1 &&
                <div className="complete-photo-description">
                    <RiErrorWarningLine size={40} />
                    <span>יש להשלים את הזנת פרטי התמונה</span>
                </div>
            }
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
    name: string
}