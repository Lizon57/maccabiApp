import { StagesIndicator } from "../../components/entities/add/StagesIndicator/StagesIndicator"

export const EntityAdd = (entity: string) => {
    return (
        <section className="entities-pages--entity-add__container">
            <StagesIndicator stages={['העלאת תמונות', 'שיוך חתימה', 'נתונים נוספים', 'אישור']} />
        </section>
    )
}