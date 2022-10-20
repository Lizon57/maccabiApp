import { makeId } from "../../../../services/util/make-id"

export const LaptopWidePlusStageIndicator = ({ stages, activeStage, currStage, onStageClick }: Props) => {
    return (
        <div className="entity-add-cmp--laptop-wide-plus-stages-indicator__container">
            {stages.map((stage, idx) => <div
                key={makeId(5)}
                title={stage}
                className={"stage-container"
                    + ((activeStage === idx) ? ' active' : '')
                    + ((currStage > idx) ? ' fully-active' : '')
                    + ((currStage === idx) ? ' latest-achived' : '')
                }
                onClick={() => onStageClick(idx)}
            >
                {stage}
            </div>)}
        </div>
    )
}


type Props = {
    stages: string[],
    activeStage: number,
    currStage: number,
    onStageClick: (stageIdx: number) => void
}