import { PhotoUploader } from "../../components/entities/add/photo-uploader/photo-uploader"
import { StagesIndicator } from "../../components/entities/add/stages-indicator/StagesIndicator"

export const EntityAdd = (entity: string) => {
    return (
        <section className="entities-pages--entity-add__container">
            <StagesIndicator stages={['העלאת תמונות', 'שיוך חתימה', 'נתונים נוספים', 'אישור']} />

            <PhotoUploader entityName={entity} />
        </section>
    )
}