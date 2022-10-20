import { EntityItemAddStage } from "../../../../types/entity/add/entity-item-add-stage"

import { makeId } from "../../../../services/util/make-id"


export const LaptopWidePlusStageIndicator = ({ stages, activeStage, currStage, onStageClick }: Props) => {
    return (
        <div className="entity-add-cmp--laptop-wide-plus-stages-indicator__container">
            {stages.map((stage, idx) => <div
                key={makeId(5)}
                title={stage.title}
                className={"stage-container"
                    + ((activeStage === idx) ? ' active' : '')
                    + ((currStage > idx) ? ' fully-active' : '')
                    + ((currStage === idx) ? ' latest-achived' : '')
                }
                onClick={() => onStageClick(idx)}
            >
                {stage.title}
            </div>)}
        </div>
    )
}


type Props = {
    stages: EntityItemAddStage[],
    activeStage: number,
    currStage: number,
    onStageClick: (stageIdx: number) => void
}