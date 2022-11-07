import { useState, useCallback } from "react"

import { entityService } from "../../services/entities/entity-service"

import { EntityAddItemStage } from "../../types/entity/add/entity-add-item-stage"

import { ErrorMessage } from "../../components/common/error-message/error-message"
import { StageIndicator } from "../../components/entities/add/stage-indicator/stage-indicator"
import { DynamicEntityAddStage } from "../../components/entities/add/dynamic-entity-add-stage/dynamic-entity-add-stage"


const getInitStagesStatus = (stages: EntityAddItemStage[]) => new Array(stages.length).fill(false)


export const EntityAdd = (entityName: string) => {
    const ENTITY = entityService.getEntityByName(entityName)

    const [currActiveStageIdx, setCurrActiveStageIdx] = useState(0)
    const [stagesStatus, setStagesStatus] = useState<boolean[]>(getInitStagesStatus(ENTITY?.addItemPage.stages || []))

    const changeStageRender = (diff: number) => setCurrActiveStageIdx(currActiveStageIdx + diff)

    const onCompleteStage = useCallback(() => {
        const newStagesStatus = stagesStatus.slice()
        newStagesStatus[currActiveStageIdx] = true
        setStagesStatus(newStagesStatus)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currActiveStageIdx])


    if (!ENTITY) return <ErrorMessage message="התרחשה שגיאה בטעינת העמוד" />

    const { addItemPage: { stages } } = ENTITY

    return (
        <section className="entities-pages--entity-add__container">
            {/* <StageIndicator stages={stages} stageStatus={stageStatus} /> */}

            <DynamicEntityAddStage
                entityName={ENTITY.name}
                stage={stages[currActiveStageIdx]}
                onCompleteStage={onCompleteStage}
            />

            <div className="stage-navigation">
                {!!currActiveStageIdx &&
                    <button className="prev" onClick={() => changeStageRender(-1)}>שלב קודם</button>
                }

                {stagesStatus[currActiveStageIdx] && (currActiveStageIdx + 1 !== stagesStatus.length) &&
                    <button className="next" onClick={() => changeStageRender(+1)}>שלב הבא</button>
                }

                {stagesStatus[currActiveStageIdx] && (currActiveStageIdx + 1 === stagesStatus.length) &&
                    <button className="next">הוסף פריט</button>
                }
            </div>
        </section >
    )
}