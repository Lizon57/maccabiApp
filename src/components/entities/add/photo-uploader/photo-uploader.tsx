import { useRef, useState } from "react"
import { FileDrop } from "react-file-drop"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { BiSelectMultiple } from "react-icons/bi"

import { makeId } from "../../../../services/util/make-id"

import { MainTitle } from "../../../common/main-title/main-title"
import { Loader } from "../../../common/loader/loader"
import { PhotoUploaderPreview } from "./photo-uploader-preview"


export const PhotoUploader = ({ entityName }: Props) => {
    const [isUploading, setIsUploading] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<File[]>()
    const [uploadedFileCounter, setUploadedFileCounter] = useState(0)

    const onFileInputChange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
        if (!files) return
        fetchFiles(files)
    }

    const onDropFile = (files: FileList | null, ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault()
        if (!files) return
        fetchFiles(files)
    }

    const fetchFiles = (fileList: FileList) => {
        const files = Array.from(fileList)
        setIsUploading(true)
        setUploadedFiles(files)
    }

    const onUploadComplete = () => {
        setUploadedFileCounter(uploadedFileCounter + 1)
        if (uploadedFileCounter === uploadedFiles?.length) setIsUploading(false)
    }


    const EL_INPUT_REF = useRef<HTMLInputElement>(null)

    const onTargetClick = () => EL_INPUT_REF.current?.click()



    return (
        <div className="entity-add-cmp--photo-uploader__container">
            <div className="upload-section">
                <MainTitle text="בחירת קבצים להעלאה" Icon={BiSelectMultiple} />

                {isUploading
                    ? <div className="uploading-loader">
                        <Loader text="מעלה קבצים, אנא המתן..." />
                    </div>

                    : <div className="drop-files-container">
                        <input
                            type="file"
                            className="hidden"
                            ref={EL_INPUT_REF}
                            onChange={onFileInputChange}
                            multiple
                        />

                        <FileDrop
                            draggingOverFrameClassName="dragging-over"
                            onTargetClick={onTargetClick}
                            onDrop={(files, event) => onDropFile(files, event)}
                        >
                            <div className="dropable-place">
                                <span className="icon"><AiOutlineCloudUpload size={50} /></span>
                                <span className="text">גרור קבצים או לחץ כאן</span>
                            </div>
                        </FileDrop>
                    </div>
                }
            </div>

            {!!uploadedFiles?.length &&
                <div className="upload-status-section">
                    <MainTitle text="קבצים שעלו" Icon={AiOutlineCloudUpload} />

                    <div className="uploaded-files-list-container">
                        {uploadedFiles.map((file, idx) => (
                            <PhotoUploaderPreview
                                key={file.name + makeId()}
                                file={file}
                                delay={idx * 500}
                                path={entityName}
                                onUploadComplete={onUploadComplete}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}


type Props = {
    entityName: string
}