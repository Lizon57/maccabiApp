import { PhotoUploader } from "../../components/entities/add/photo-uploader/photo-uploader"
import { StageIndicator } from "../../components/entities/add/stages-indicator/stage-indicator"

export const EntityAdd = (entity: string) => {
    return (
        <section className="entities-pages--entity-add__container">
            <StageIndicator stages={['העלאת תמונות', 'שיוך חתימה', 'נתונים נוספים', 'אישור']} />

            <PhotoUploader entityName={entity} />
        </section>
    )
}