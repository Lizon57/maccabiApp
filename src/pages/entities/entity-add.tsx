import { useState } from "react"

import { EntityItem } from "../../types/entity/entity-item"

import { entityService } from "../../services/entities/entity-service"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { StageIndicator } from "../../components/entities/add/stages-indicator/stage-indicator"
import { DynamicEntityAddStage } from "../../components/entities/add/dynamic-entity-add-stage/dynamic-entity-add-stage"


export const EntityAdd = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [currStage, setCurrStage] = useState(0)
    const [activeStage, setCurrActiveStage] = useState(0)
    const [newEntity, setNewEntity] = useState<EntityItem>(entityService.getEmptyEntityItem())

    const onStageFullfill = (data: any, stageType: string) => {
        switch (stageType) {
            case 'photo-uploader':
                if (!data) break
                setNewEntity({ ...newEntity, images: data })
        }

        setCurrStage(currStage + 1)
        setCurrActiveStage(currStage + 1)
    }


    if (!ENTITY) return <ErrorMessage message="התרחשה שגיאה בטעינת העמוד" />

    const { addItemPage } = ENTITY

    return (
        <section className="entities-pages--entity-add__container">
            <StageIndicator
                stages={addItemPage.stages}
                currStage={currStage}
                activeStage={activeStage}
            />

            <DynamicEntityAddStage
                stage={addItemPage.stages[activeStage]}
                entityName={entityName}
                onStageFullfill={onStageFullfill}
            />
        </section>
    )
}