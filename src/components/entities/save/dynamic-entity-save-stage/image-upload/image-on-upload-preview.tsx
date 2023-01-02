import { useEffect, useRef } from "react"


// import { cloudinaryService } from "../../../../../services/cloudinary-service"
import { emptyEntityItemService } from "../../../../../services/entities/empty-entity-item-service"
// import { entityItemService } from "../../../../../services/entities/entity-item-service"

// import { IMAGE_DB } from "../../../../../data/entities/image/image-db"

import { makeId } from "../../../../../services/util/make-id"

import { EntityItem } from "../../../../../types/entity/entities/entity-item"

import { Loader } from "../../../../common/loader/loader"


export const ImageOnUploadPreview = ({ file, entityName, onUploadSuccess, onUploadFail }: Props) => {
    let isFirstRender = useRef(true)


    useEffect(() => {
        if (!isFirstRender.current) return

        const fetchFile = async () => {
            isFirstRender.current = false

            try {
                setTimeout(async () => {
                    const image = await emptyEntityItemService.get('image') as EntityItem
                    image.id = makeId()
                    image.entityInfo.imageUrl = 'https://res.cloudinary.com/dyxf7nmbe/image/upload/v1666553252/signature/qc8yemagsqd7ojlnxym4.jpg'
                    image.entityInfo.name.display = 'ירון עוז סופרגול'
                    onUploadSuccess(image, file)
                }, 40)
                // }, 4000)
                // throw new Error('שגיאה בהעלאת תמונה')

                // const { secure_url: url, original_filename: name } = await cloudinaryService.fetchRequest(file, entityName)
                // if (!url || !name) throw new Error('שגיאה בהעלאת תמונה')

                // const image = emptyEntityItemService.get('image') as ImageEntityItem
                // image.entityInfo.imageUrl = url
                // image.entityInfo.name.display = name

                // const uploadedImage = await entityItemService.save(image, 'ImageDB', IMAGE_DB) as ImageEntityItem

                // onUploadSuccess(uploadedImage, file)
            } catch (err) {
                console.log(err)
                onUploadFail(file)
            }
        }

        fetchFile()
        // }, [entityName, file, onUploadSuccess, onUploadFail])
    }, [entityName, file, onUploadSuccess, onUploadFail])


    return (
        <Loader text={`מעלה את הקובץ ${file.name}, אנא המתן...`} />
    )
}


type Props = {
    file: File
    entityName: string
    onUploadSuccess: (image: EntityItem, file: File) => void
    onUploadFail: (file: File) => void
}