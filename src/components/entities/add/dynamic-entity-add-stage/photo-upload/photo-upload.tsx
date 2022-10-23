import { useEffect, useState } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { FaUpload } from "react-icons/fa"

import { makeId } from "../../../../../services/util/make-id"

import { MainTitle } from "../../../../common/main-title/main-title"
import { ErrorMessage } from "../../../../common/error-message/error-message"
import { DropableSection } from "./dropable-section"
import { PhotoOnUploadPreview } from "./photo-on-upload-preview"
import { UploadedPhotoPreview } from "./uploaded-photo-preview"


export const PhotoUpload = ({ entityName }: Props) => {
    const [isUploading, setIsUploading] = useState(false)
    const [uploadedPhotosUrls, setUploadedPhotosUrls] = useState<Photo[]>([])
    const [photosOnUpload, setPhotosOnUpload] = useState<File[]>([])
    const [uploadCounter, setUploadAttemptsCounter] = useState(0)
    const [failsUpload, setFailsUpload] = useState<string[]>([])


    useEffect(() => {
        if (!isUploading) return
        else if (uploadCounter === uploadedPhotosUrls.length + photosOnUpload.length) setIsUploading(false)
    }, [uploadCounter, isUploading, uploadedPhotosUrls.length, photosOnUpload.length])


    const onFetchFiles = (fileList: FileList) => {
        setIsUploading(true)
        const files = Array.from(fileList)
        setPhotosOnUpload(files)
    }


    const onUploadSuccess = (photo: Photo, file: File) => {
        const filteredPhotosOnUpload = photosOnUpload.filter(fileItem => fileItem !== file)
        setPhotosOnUpload(filteredPhotosOnUpload)

        const uploadedPhotos = uploadedPhotosUrls.slice()
        uploadedPhotos.push(photo)
        setUploadedPhotosUrls(uploadedPhotos)

        setUploadAttemptsCounter(uploadCounter + 1)
    }

    const onUploadFail = (file: File) => {
        const newFailsUpload = failsUpload.slice()
        newFailsUpload.push(file.name)
        setFailsUpload(newFailsUpload)

        const filteredPhotosOnUpload = photosOnUpload.filter(fileItem => fileItem !== file)
        setPhotosOnUpload(filteredPhotosOnUpload)
    }


    const onRemovePhoto = (photo: Photo) => {
        const newUploadedPhotosUrls = uploadedPhotosUrls.filter(fileItem => fileItem !== photo)
        setUploadedPhotosUrls(newUploadedPhotosUrls)
    }


    const setNewPhotoName = (photo: Photo) => {
        const photoIdx = uploadedPhotosUrls.findIndex(photoItem => photoItem === photo)
        const uploadedPhotos = uploadedPhotosUrls.slice()
        uploadedPhotos.splice(photoIdx, 1, photo)
        setUploadedPhotosUrls(uploadedPhotos)
    }


    const shouldRenderFilesList = !!uploadedPhotosUrls.length || !!photosOnUpload.length || !!failsUpload.length

    return (
        <div className="entity-add-cmp--photo-upload__container">
            <div className="file-picker">
                <MainTitle text="העלאת תמונות" Icon={FaUpload} />
                <DropableSection isUploading={isUploading} onFetchFiles={onFetchFiles} />
            </div>

            {shouldRenderFilesList && <div className="uploaded-files">
                <MainTitle text="קבצים שעלו" Icon={AiOutlineCloudUpload} />
                <div
                    className={"files-list-container"
                        + ((uploadedPhotosUrls.length + photosOnUpload.length < 4) ? ' short-list' : '')}
                >
                    {photosOnUpload.map(file => <PhotoOnUploadPreview
                        key={file.name}
                        file={file}
                        entityName={entityName}
                        onUploadSuccess={onUploadSuccess}
                        onUploadFail={onUploadFail}
                    />)}
                    {uploadedPhotosUrls.map(photo => <UploadedPhotoPreview
                        key={photo.url}
                        photo={photo}
                        setNewPhotoName={setNewPhotoName}
                        onRemovePhoto={onRemovePhoto}
                    />)}
                    {failsUpload.map(failUpload => <ErrorMessage
                        key={makeId(5)}
                        message={`העלאת הקובץ ${failUpload} נכשלה. אנא נסה שנית`}
                    />)}
                </div>
            </div>}
        </div>
    )
}


type Props = {
    entityName: string
}


type Photo = {
    url: string,
    name: string
}