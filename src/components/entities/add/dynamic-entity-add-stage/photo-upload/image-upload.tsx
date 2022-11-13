import { useEffect, useState } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { FaUpload } from "react-icons/fa"

import { ImageEntityItem } from "../../../../../types/entity/entities/image-entity-item"

import { makeId } from "../../../../../services/util/make-id"

import { MainTitle } from "../../../../common/main-title/main-title"
import { ErrorMessage } from "../../../../common/error-message/error-message"
import { DropableSection } from "./dropable-section"
import { ImageOnUploadPreview } from "./image-on-upload-preview"
import { UploadedImagePreview } from "./uploaded-image-preview"


export const ImageUpload = ({ entityName, minImageCount, maxImageCount, tempItem, onCompleteStage }: Props) => {
    const [isUploading, setIsUploading] = useState(false)
    const [uploadedImages, setUploadedImages] = useState<ImageEntityItem[]>([])
    const [imagesOnUpload, setImagesOnUpload] = useState<File[]>([])
    const [uploadCounter, setUploadAttemptsCounter] = useState(0)
    const [failsUpload, setFailsUpload] = useState<string[]>([])


    useEffect(() => {
        if (!isUploading) return
        else if (uploadCounter === uploadedImages.length + imagesOnUpload.length) setIsUploading(false)
    }, [uploadCounter, isUploading, uploadedImages.length, imagesOnUpload.length])


    useEffect(() => {
        if (uploadedImages.length >= minImageCount && uploadedImages.length <= maxImageCount) {
            const newItemImages = [...tempItem.images]
            const uploadedImagesIds = uploadedImages.map(uploadedImage => uploadedImage.id)
            newItemImages.concat(uploadedImagesIds)
            onCompleteStage({ images: newItemImages })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedImages])


    const onFetchFiles = (fileList: FileList) => {
        setIsUploading(true)
        const files = Array.from(fileList)
        setImagesOnUpload(files)
    }


    const onUploadSuccess = (image: ImageEntityItem, file: File) => {
        const filteredImagesOnUpload = imagesOnUpload.filter(fileItem => fileItem !== file)
        setImagesOnUpload(filteredImagesOnUpload)

        const newUploadedImages = uploadedImages.slice()
        newUploadedImages.push(image)
        setUploadedImages(newUploadedImages)

        setUploadAttemptsCounter(uploadCounter + 1)
    }

    const onUploadFail = (file: File) => {
        const newFailsUpload = failsUpload.slice()
        newFailsUpload.push(file.name)
        setFailsUpload(newFailsUpload)

        const filteredImagesOnUpload = imagesOnUpload.filter(fileItem => fileItem !== file)
        setImagesOnUpload(filteredImagesOnUpload)
    }


    const onRemoveImage = (image: ImageEntityItem) => {
        const newUploadedImages = uploadedImages.filter(uploadedImage => uploadedImage.id !== image.id)
        setUploadedImages(newUploadedImages)
    }


    const setNewImageName = (image: ImageEntityItem) => {
        const imageIdx = uploadedImages.findIndex(uploadedImage => uploadedImage.id === image.id)
        const newUploadedImages = uploadedImages.slice()
        newUploadedImages.splice(imageIdx, 1, image)
        setUploadedImages(newUploadedImages)
    }



    const shouldRenderFilesList = !!uploadedImages.length || !!imagesOnUpload.length || !!failsUpload.length

    return (
        <div className="entity-add-cmp--image-upload__container">
            <div className="file-picker">
                <MainTitle text="העלאת תמונות" Icon={FaUpload} />
                <DropableSection isUploading={isUploading} onFetchFiles={onFetchFiles} />
            </div>

            {shouldRenderFilesList && <div className="uploaded-files">
                <MainTitle text="קבצים שעלו" Icon={AiOutlineCloudUpload} />
                <div
                    className={"files-list-container"
                        + ((uploadedImages.length + imagesOnUpload.length < 4) ? ' short-list' : '')}
                >
                    {imagesOnUpload.map(file => <ImageOnUploadPreview
                        key={file.name}
                        file={file}
                        entityName={entityName}
                        onUploadSuccess={onUploadSuccess}
                        onUploadFail={onUploadFail}
                    />)}
                    {uploadedImages.map(image => <UploadedImagePreview
                        key={image.id}
                        image={image}
                        setNewImageName={setNewImageName}
                        onRemoveImage={onRemoveImage}
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
    entityName: string,
    minImageCount: number,
    maxImageCount: number,
    tempItem: any,
    onCompleteStage: (data: Object) => void
}