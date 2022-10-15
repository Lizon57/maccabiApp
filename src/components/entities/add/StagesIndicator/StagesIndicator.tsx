import { useState } from "react"
import { makeId } from "../../../../services/util/make-id"

export const StagesIndicator = ({ stages }: Props) => {
    const [currStage] = useState(0)
    const [activeStage, setActiveState] = useState(0)

    const onStageClick = (stageIdx: number) => {
        if (stageIdx > currStage) return
        setActiveState(stageIdx)
    }


    return (
        <div className="entity-add-cmp--stages-indicator__container">
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
    stages: string[]
}