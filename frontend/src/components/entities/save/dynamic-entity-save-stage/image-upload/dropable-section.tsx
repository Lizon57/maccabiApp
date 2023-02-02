import { useRef } from "react"
import { FileDrop } from "react-file-drop"

import { ICON_TYPE_MAP } from "../../../../../constans/icon-type-map"

import { Loader } from "../../../../common/loader/loader"


export const DropableSection = ({ isUploading, onFetchFiles }: Props) => {
    const elInput = useRef<HTMLInputElement>(null)
    const onTargetClick = () => elInput.current?.click()

    const fetchFiles = (files: FileList) => {
        if (!files) return
        onFetchFiles(files)
    }


    const onFileInputChange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
        files && fetchFiles(files)
    }


    const onDropFile = (files: FileList | null, ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault()
        files && fetchFiles(files)
    }


    if (isUploading) return <Loader text="מעלה קבצים, אנא המתן..." />

    const UploadIcon = ICON_TYPE_MAP.entitySaveDefault.imageUpload

    return (
        <div className="entity-save-cmp--image-uploader-dropable-section__container">
            <input
                type="file"
                className="hidden"
                ref={elInput}
                onChange={onFileInputChange}
                multiple
            />

            <FileDrop
                draggingOverFrameClassName="dragging-over"
                onTargetClick={onTargetClick}
                onDrop={onDropFile}
            >
                <div className="dropable-place">
                    <span className="icon"><UploadIcon size={50} /></span>
                    <span className="text">גרור קבצים או לחץ כאן</span>
                </div>
            </FileDrop>
        </div>
    )
}


type Props = {
    isUploading: boolean
    onFetchFiles: (fileList: FileList) => void
}