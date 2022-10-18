import { useState } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"

import { MainTitle } from "../../../common/main-title/main-title"
import { PhotoUploaderPreview } from "./photo-uploader-preview"
import { DropableSection } from "./dropable-section"


export const PhotoUploader = ({ entityName }: Props) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>()

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
    entityName: string
}