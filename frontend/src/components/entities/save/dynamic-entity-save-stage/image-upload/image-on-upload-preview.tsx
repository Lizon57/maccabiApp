import { useEffect } from "react"
import { useIsFirstRender } from "../../../../../hooks/use-is-first-render"

// import { cloudinaryService } from "../../../../../services/cloudinary-service"
import { emptyEntityItemService } from "../../../../../services/entities/empty-entity-item-service"
// import { entityItemService } from "../../../../../services/entities/entity-item-service"

import { makeId } from "../../../../../services/util/make-id"

import { ImageItem } from "../../../../../models/types/entities/item/image-item"

import { Loader } from "../../../../common/loader/loader"


export const ImageOnUploadPreview = ({ file, entityName, onUploadSuccess, onUploadFail }: Props) => {
    let isFirstRender = useIsFirstRender()

    useEffect(() => {
        if (!isFirstRender) return

        const fetchFile = async () => {
            try {
                setTimeout(async () => {
                    const image = await emptyEntityItemService.get('image')
                    image.id = makeId()
                    image.entityInfo.imageUrl = 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666553252/signature/qc8yemagsqd7ojlnxym4.jpg'
                    image.entityInfo.name.display = 'ירון עוז סופרגול'
                    onUploadSuccess(image, file)
                }, 40)
                // }, 4000)
                // throw new Error('שגיאה בהעלאת תמונה')

                // const { secure_url: url, original_filename: name } = await cloudinaryService.fetchRequest(file, entityName)
                // if (!url || !name) throw new Error('שגיאה בהעלאת תמונה')

                // const image = emptyEntityItemService.get('image')
                // image.entityInfo.imageUrl = url
                // image.entityInfo.name.display = name

                // const uploadedImage = await entityItemService.save('image', image)

                // onUploadSuccess(uploadedImage, file)
            } catch (err) {
                onUploadFail(file)
            }
        }

        fetchFile()
    }, [entityName, file, isFirstRender, onUploadSuccess, onUploadFail])


    return (
        <Loader text={`מעלה את הקובץ ${file.name}, אנא המתן...`} />
    )
}


type Props = {
    file: File
    entityName: string
    onUploadSuccess: (image: ImageItem, file: File) => void
    onUploadFail: (file: File) => void
}