import { useEffect, useState } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"

import { MainTitle } from "../../../../common/main-title/main-title"
import { PhotoUploaderPreview } from "./photo-uploader-preview"
import { DropableSection } from "./dropable-section"


export const PhotoUploader = ({ entityName, minPhotoNumber, onStageFullfill }: Props) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>()
    const [uploadedFilesIds, setUploadedFilesIds] = useState<string[]>()


    useEffect(() => {
        if (!minPhotoNumber) onStageFullfill(null, 'photo-uploader')
        else if (uploadedFiles?.length && uploadedFiles?.length >= minPhotoNumber) {
            // onStageFullfill(uploadedFiles, 'photo-uploader')
        }
    }, [uploadedFiles, minPhotoNumber, onStageFullfill])


    const fetchFiles = (fileList: FileList) => {
        const files = Array.from(fileList)
        uploadedFiles?.length ? setUploadedFiles([...uploadedFiles, ...files]) : setUploadedFiles(files)
    }


    return (
        <div className="entity-add-cmp--photo-uploader__container">
            <DropableSection
                onFetchFiles={fetchFiles} />

            {!!uploadedFiles?.length &&
                <div className="upload-status-section">
                    <MainTitle text="קבצים שעלו" Icon={AiOutlineCloudUpload} />

                    <div className="uploaded-files-list-container">
                        {uploadedFiles.map((file, idx) => (
                            <PhotoUploaderPreview
                                key={file.name + idx}
                                file={file}
                                delay={idx * 500}
                                path={entityName}
                            />
                        ))}
                    </div>
                </div>}
        </div>
    )
}


type Props = {
    entityName: string,
    minPhotoNumber?: number,
    onStageFullfill: (data: any, stageType: string) => void
}