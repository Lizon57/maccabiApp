import { useState, useEffect } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"

import { useSelector } from "react-redux"
import { RootState } from "../../../../../store/store"
import { setSaveEntityItem } from "../../../../../store/action/save-entity-item-action"

import { EntityItem } from "../../../../../models/types/entities/item/entity-item"
import { ImageItem } from "../../../../../models/types/entities/item/image-item"

import { makeId } from "../../../../../services/util/make-id"

import { DropableSection } from "./dropable-section"
import { ImageOnUploadPreview } from "./image-on-upload-preview"
import { UploadedImagePreview } from "./uploaded-image-preview"
import { MainTitle } from "../../../../common/main-title/main-title"
import { ErrorMessage } from "../../../../common/error-message/error-message"



export const ImageUpload = ({ entityName, minImageCount, maxImageCount }: Props) => {
    const { item } = useSelector((state: RootState) => state.saveEntityItemModule)

    const [isUploading, setIsUploading] = useState(false)
    const [imagesOnUpload, setImagesOnUpload] = useState<File[]>()
    const [failsUpload, setFailsUpload] = useState<string[]>()


    useEffect(() => {
        if (!isUploading) return
        !imagesOnUpload?.length && setIsUploading(false)
    }, [isUploading, imagesOnUpload])


    const onFetchFiles = (fileList: FileList) => {
        setIsUploading(true)
        const files = Array.from(fileList)
        setImagesOnUpload(files)
    }


    const onUploadSuccess = (image: ImageItem, file: File) => {
        const editedItem = structuredClone(item)
        let { miniImages } = editedItem
        if (!miniImages) miniImages = []
        miniImages.push({
            id: image._id,
            name: image.entityInfo.name.display,
            imageUrl: image.entityInfo.imageUrl
        })
        setSaveEntityItem(editedItem)

        const filteredImagesOnUpload = imagesOnUpload?.filter(fileItem => fileItem !== file)
        setImagesOnUpload(filteredImagesOnUpload)
    }


    const onUploadFail = (file: File) => {
        const newFailsUpload = failsUpload?.slice()
        if (!newFailsUpload?.length) return
        newFailsUpload.push(file.name)
        setFailsUpload(newFailsUpload)

        const filteredImagesOnUpload = imagesOnUpload?.filter(fileItem => fileItem !== file)
        setImagesOnUpload(filteredImagesOnUpload)
    }


    const onRemoveImage = (id: string) => {
        if (!Array.isArray(item.miniImages)) return

        const editedItem: EntityItem = structuredClone(item)
        if (!editedItem.miniImages) return
        editedItem.miniImages = editedItem.miniImages.filter(image => image.id !== id)
        setSaveEntityItem(editedItem)
    }


    const getFailMsg = () => {
        minImageCount = minImageCount || 0
        let msg = ''

        if (minImageCount > (item.miniImages?.length || 0)) {
            msg = 'יש להזין '
            if (minImageCount === 1) msg += 'לפחות תמונה אחת'
            else msg += `לפחות ${(minImageCount === 2) ? 'שתי' : minImageCount} תמונות`
        }

        if ((item.miniImages?.length || 0) > (maxImageCount || Infinity)) {
            msg = 'יש להזין עד '
            if (maxImageCount === 1) msg += 'תמונה אחת'
            else msg += `${(minImageCount === 2) ? 'שתי' : minImageCount} תמונות`
        }

        return msg
    }



    const shouldRenderFilesList = !!item?.miniImages?.length || !!imagesOnUpload?.length || !!failsUpload?.length
    const shouldRenderFailMsg = !!getFailMsg()

    const imagesOnUploadPreviewProps = { entityName, onUploadSuccess, onUploadFail }
    const dropableSectionProps = { isUploading, onFetchFiles }

    return (
        <div className="entity-save-cmp--image-upload__container">
            <div className="file-picker"><DropableSection {...dropableSectionProps} /></div>

            {shouldRenderFilesList && <div className="uploaded-files">
                <MainTitle text="קבצים שעלו" Icon={AiOutlineCloudUpload} />
                <div
                    className={"files-list-container"
                        + (((item.miniImages?.length || 0) + (imagesOnUpload?.length || 0) < 4) ? ' short-list' : '')
                    }
                >
                    {imagesOnUpload?.map(file => <ImageOnUploadPreview
                        key={file.name}
                        file={file}
                        {...imagesOnUploadPreviewProps}
                    />)}
                    {(item.miniImages as MiniImages).map(image => <UploadedImagePreview
                        key={image.id}
                        image={image}
                        onRemoveImage={onRemoveImage}
                    />)}
                    {failsUpload?.map(failUpload => <ErrorMessage
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
    entityName: string
    minImageCount?: number
    maxImageCount?: number
}


type MiniImages = {
    id: string
    name: string
    imageUrl: string
}[]