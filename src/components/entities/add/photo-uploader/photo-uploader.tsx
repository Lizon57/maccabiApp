import { useRef, useState } from "react"
import { FileDrop } from "react-file-drop"
import { AiOutlineCheck, AiOutlineCloudUpload } from "react-icons/ai"
// import { RiErrorWarningLine } from "react-icons/ri"

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
            console.log(res)
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
                <div className="list-container">
                    {uploadedFiles.map(image => <div
                        key={makeId()}
                        className="photo-container"
                        style={{ backgroundImage: `url(${image?.url})` }}
                    >
                        <div className="uploaded-name">מעריב 15-06-1990 סיקור משחק ליגה הפועל מרמורק (ב) (16.07.1990) ועוד כמה מילים לתיאור לראות שהכל בסדר עם שם ארוך</div>
                        <span className="status complete">
                            {/* <RiErrorWarningLine /> */}
                            <AiOutlineCheck />
                        </span>
                    </div>)}
                </div>

                <button onClick={onAbortUpload} className="cancel-upload">בטל העלאה</button>
            </div>}
        </div>
    )
}


type Props = {
    entityName: string
}