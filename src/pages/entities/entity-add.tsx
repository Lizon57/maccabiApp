import { StagesIndicator } from "../../components/entities/add/StagesIndicator/StagesIndicator"

export const EntityAdd = (entity: string) => {
    return (
        <section className="entities-pages--entity-add__container">
            <StagesIndicator stages={['שלב ראשון', 'שלב שני', 'שלב שלישי', 'שלב רביעי', 'שלב חמישייי וואו אמאלה']} />
        </section>
    )
}