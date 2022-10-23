import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"


export const LaptopWidePlusStageIndicator = ({ stages, stageStatus }: Props) => {
    const { currActiveStageIdx, lastAchieveStageIdx, isNextStageAvailable } = stageStatus

    return (
        <div className="entity-add-cmp--laptop-wide-plus-stage-indicator__container">
            {stages.map((stage, idx) => <div
                key={stage.title}
                title={idx <= lastAchieveStageIdx
                    ? currActiveStageIdx === idx
                        ? stages[idx].title
                        : `חזור אל ${stages[idx].title}`
                    : `השלם את השלבים הנדרשים כדי לעבור לשלב ${stages[idx].title}`}
                className={"stage-container"
                    + ((idx < lastAchieveStageIdx) ? ' complete' : '')
                    + ((idx === currActiveStageIdx) ? ' active' : '')
                }
            >
                {stage.title}
            </div>)}
        </div>
    )
}


type Props = {
    stages: EntityAddItemStage[],
    stageStatus: {
        currActiveStageIdx: number,
        lastAchieveStageIdx: number,
        isNextStageAvailable: boolean
    }
}