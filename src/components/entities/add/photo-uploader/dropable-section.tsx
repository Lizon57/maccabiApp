import { useRef } from "react"
import { FileDrop } from "react-file-drop"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { BiSelectMultiple } from "react-icons/bi"

import { MainTitle } from "../../../common/main-title/main-title"


export const DropableSection = ({ onFetchFiles }: Props) => {
    const EL_INPUT_REF = useRef<HTMLInputElement>(null)
    const onTargetClick = () => EL_INPUT_REF.current?.click()


    const onFileInputChange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
        if (!files) return
        onFetchFiles(files)
    }

    const onDropFile = (files: FileList | null, ev: React.DragEvent<HTMLDivElement>) => {
        ev.preventDefault()
        if (!files) return
        onFetchFiles(files)
    }


    return (
        <div className="entity-add-cmp--photo-uploader-dropable-section__container">
            <MainTitle text="בחירת קבצים להעלאה" Icon={BiSelectMultiple} />

            <div className="drop-files-container">
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
        </div>
    )
}


type Props = {
    onFetchFiles: (fileList: FileList) => void
}