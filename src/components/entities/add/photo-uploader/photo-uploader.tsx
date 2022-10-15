import { useRef, useState } from "react"
import { FileDrop } from "react-file-drop"
import { AiOutlineCloudUpload } from "react-icons/ai"

import { cloudinaryService } from "../../../../services/cloudinary-service"
import { makeId } from "../../../../services/util/make-id"

import { MainTitle } from "../../../common/main-title/main-title"


export const PhotoUploader = ({ entityName }: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([])

    const EL_INPUT_REF = useRef<HTMLInputElement>(null)

    const onFileInputChange = async ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
        fetchFiles(files as FileList)
    }

    const onTargetClick = () => EL_INPUT_REF.current?.click()

    const onDropFile = (files: FileList | null) => {
        if (!files) return
        fetchFiles(files as FileList)
    }

    const fetchFiles = async (files: FileList) => {
        setIsLoading(true)

        try {
            const res = await cloudinaryService.fetchRequest(files as FileList, entityName)
            setUploadedFiles(res)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const onAbortUpload = () => setUploadedFiles([])


    if (isLoading && !!uploadedFiles.length) return <div>מעלה...</div>

    return (
        <div className="entity-add-cmp--photo-uploader__container">
            <MainTitle text="העלאת קבצים" Icon={AiOutlineCloudUpload} />

            {!uploadedFiles.length && <div className="drop-container" title="גרור קבצים או לחץ כאן">
                <input
                    onChange={onFileInputChange}
                    type="file"
                    className="hidden"
                    ref={EL_INPUT_REF}
                    multiple
                />

                <FileDrop
                    draggingOverFrameClassName="dragging-over"
                    onTargetClick={onTargetClick}
                    onDrop={onDropFile}
                >
                    <div className="dropable-place">
                        <span className="icon"><AiOutlineCloudUpload size={50} /></span>
                        <span className="text">גרור קבצים או לחץ כאן</span>
                    </div>
                </FileDrop>
            </div>}

            {!!uploadedFiles.length && <div className="uploaded-photo">
                {uploadedFiles.map(image => <div key={makeId()}>
                    <img src={image?.url} alt={image?.original_filename} />
                </div>)}
                <div onClick={onAbortUpload}>חזור אחורה</div>
            </div>}
        </div>
    )
}


type Props = {
    entityName: string
}