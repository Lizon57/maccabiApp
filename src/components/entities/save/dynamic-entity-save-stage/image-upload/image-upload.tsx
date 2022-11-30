import { useState, useEffect } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"

import { useStoreDispatch } from "../../../../../hooks/store/use-store-dispatch"
import { useStoreSelector } from "../../../../../hooks/store/use-store-selector"

import { EntityItem } from "../../../../../types/entity/entities/entity-item"

import { updateItem } from "../../../../../store/slicer/entity-save-slicer"

import { makeId } from "../../../../../services/util/make-id"

import { DropableSection } from "./dropable-section"
import { ImageOnUploadPreview } from "./image-on-upload-preview"
import { UploadedImagePreview } from "./uploaded-image-preview"
import { MainTitle } from "../../../../common/main-title/main-title"
import { ErrorMessage } from "../../../../common/error-message/error-message"


export const ImageUpload = ({ entityName, minImageCount, maxImageCount }: Props) => {
    const dispatch = useStoreDispatch()
    const { item } = useStoreSelector(state => state.entitySaveModule)

    const [isUploading, setIsUploading] = useState(false)
    const [imagesOnUpload, setImagesOnUpload] = useState<File[]>([])
    const [failsUpload, setFailsUpload] = useState<string[]>([])


    useEffect(() => {
        if (!isUploading) return
        else if (!imagesOnUpload.length) setIsUploading(false)
    }, [isUploading, imagesOnUpload])


    const onFetchFiles = (fileList: FileList) => {
        setIsUploading(true)
        const files = Array.from(fileList)
        setImagesOnUpload(files)
    }


    const onUploadSuccess = (image: EntityItem, file: File) => {
        const editedItem = structuredClone(item)
        if (!editedItem.miniImages?.length) editedItem.miniImages = []
        editedItem.miniImages.push({
            id: image.id,
            name: image.entityInfo.name.display,
            imageUrl: image.entityInfo.imageUrl
        })
        dispatch(updateItem(editedItem))

        const filteredImagesOnUpload = imagesOnUpload.filter(fileItem => fileItem !== file)
        setImagesOnUpload(filteredImagesOnUpload)
    }


    const onUploadFail = (file: File) => {
        const newFailsUpload = failsUpload.slice()
        newFailsUpload.push(file.name)
        setFailsUpload(newFailsUpload)

        const filteredImagesOnUpload = imagesOnUpload.filter(fileItem => fileItem !== file)
        setImagesOnUpload(filteredImagesOnUpload)
    }


    const onRemoveImage = (id: string) => {
        if (!Array.isArray(item.miniImages)) return

        const editedItem: EntityItem = structuredClone(item)
        if (!editedItem.miniImages) return
        editedItem.miniImages = editedItem?.miniImages.filter(image => image.id !== id)
        dispatch(updateItem(editedItem))
    }


    const getFailMsg = () => {
        minImageCount = minImageCount || 0
        let msg = ''

        if (minImageCount > (item.miniImages?.length || 0)) {
            msg = 'יש להזין '
            if (minImageCount === 1) msg += 'לפחות תמונה אחת'
            else if (minImageCount === 2) msg += 'לפחות שתי תמונות'
            else msg += `לפחות ${minImageCount} תמונות `
        }

        if ((item.miniImages?.length || 0) > (maxImageCount || Infinity)) {
            msg = 'יש להזין '
            if (maxImageCount === 1) msg += 'עד תמונה אחת'
            if (maxImageCount === 2) msg += 'עד שתי'
            else msg += `עד ${maxImageCount} תמונות`
        }

        return msg
    }



    const shouldRenderFilesList = !!item?.miniImages?.length || !!imagesOnUpload.length || !!failsUpload.length
    const shouldRenderFailMsg = !!getFailMsg()

    return (
        <div className="entity-save-cmp--image-upload__container">
            <div className="file-picker">
                <DropableSection isUploading={isUploading} onFetchFiles={onFetchFiles} />
            </div>

            {shouldRenderFilesList && <div className="uploaded-files">
                <MainTitle text="קבצים שעלו" Icon={AiOutlineCloudUpload} />
                <div
                    className={"files-list-container"
                        + (((item?.miniImages?.length || 0) + imagesOnUpload.length < 4) ? ' short-list' : '')
                    }
                >
                    {imagesOnUpload.map(file => <ImageOnUploadPreview
                        key={file.name}
                        file={file}
                        entityName={entityName}
                        onUploadSuccess={onUploadSuccess}
                        onUploadFail={onUploadFail}
                    />)}
                    {item?.miniImages?.map(image => <UploadedImagePreview
                        key={image.id}
                        image={image}
                        onRemoveImage={onRemoveImage}
                    />)}
                    {failsUpload.map(failUpload => <ErrorMessage
                        key={makeId(5)}
                        message={`העלאת הקובץ ${failUpload} נכשלה. אנא נסה שנית`}
                    />)}
                </div>
            </div>}

            {shouldRenderFailMsg && <div className="msg">{getFailMsg()}.</div>}
        </div >
    )
}


type Props = {
    entityName: string,
    minImageCount?: number,
    maxImageCount?: number
}