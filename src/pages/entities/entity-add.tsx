import { useState } from "react"

import { entityService } from "../../services/entities/entity-service"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { StageIndicator } from "../../components/entities/add/stage-indicator/stage-indicator"


export const EntityAdd = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [stageStatus, setStageStatus] = useState({ currActiveStageIdx: 0, lastAchieveStageIdx: 0, isNextStageAvailable: false })


    if (!ENTITY) return <ErrorMessage message="התרחשה שגיאה בטעינת העמוד" />

    return (
        <section className="entities-pages--entity-add__container2">
            <StageIndicator stages={ENTITY.addItemPage.stages} stageStatus={stageStatus} />
        </section>
    )
}