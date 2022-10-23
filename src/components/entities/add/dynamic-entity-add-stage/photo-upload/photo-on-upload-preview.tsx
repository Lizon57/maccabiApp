import { useEffect, useRef } from "react"

import { cloudinaryService } from "../../../../../services/cloudinary-service"

import { Loader } from "../../../../common/loader/loader"


export const PhotoOnUploadPreview = ({ file, entityName, onUploadSuccess, onUploadFail }: Props) => {
    let isFirstRender = useRef(true)

    useEffect(() => {
        if (!isFirstRender.current) return

        const fetchFile = async () => {
            isFirstRender.current = false

            try {
                setTimeout(() => {
                    const photo = { url: 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666553252/signature/qc8yemagsqd7ojlnxym4.jpg', name: 'בדיקה' }
                    onUploadSuccess(photo, file)
                }, 40)
                // }, 4000)
                // throw new Error('שגיאה בהעלאת תמונה')

                // const { secure_url: url, original_filename: name } = await cloudinaryService.fetchRequest(file, entityName)
                // if (!url || !name) throw new Error('שגיאה בהעלאת תמונה')
                // const photo = { url, name }
                // onUploadSuccess(photo, file)
            } catch (err) {
                onUploadFail(file)
            }
        }
        fetchFile()
    }, [entityName, file, onUploadSuccess, onUploadFail])


    return (
        <Loader text={`מעלה את הקובץ ${file.name}, אנא המתן...`} />
    )
}


type Props = {
    file: File,
    entityName: string,
    onUploadSuccess: (photo: Photo, file: File) => void,
    onUploadFail: (file: File) => void
}


type Photo = {
    url: string,
    name: string
}