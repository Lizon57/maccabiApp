import { useState } from "react"

import { entityService } from "../../services/entities/entity-service"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { StageIndicator } from "../../components/entities/add/stage-indicator/stage-indicator"
import { DynamicEntityAddStage } from "../../components/entities/add/dynamic-entity-add-stage/dynamic-entity-add-stage"


export const EntityAdd = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [stageStatus, setStageStatus] = useState({ currActiveStageIdx: 0, lastAchieveStageIdx: 0, isNextStageAvailable: false })


    if (!ENTITY) return <ErrorMessage message="התרחשה שגיאה בטעינת העמוד" />

    const { addItemPage: { stages } } = ENTITY

    return (
        <section className="entities-pages--entity-add__container">
            <StageIndicator stages={stages} stageStatus={stageStatus} />

            <DynamicEntityAddStage
                entityName={ENTITY.name}
                stage={stages[stageStatus.currActiveStageIdx]}
            />

            <div className="stage-navigation">
                {!!stageStatus.currActiveStageIdx && <button className="prev">שלב קודם</button>}

                {stageStatus.isNextStageAvailable &&
                    <button className="next">שלב הבא</button>
                }
            </div>
        </section>
    )
}