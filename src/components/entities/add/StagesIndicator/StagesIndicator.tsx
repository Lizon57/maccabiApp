import { useState } from "react"
import { makeId } from "../../../../services/util/make-id"

export const StagesIndicator = ({ stages }: Props) => {
    const [activeStage, setActiveState] = useState(2)


    return (
        <div className="entity-add-cmp--stages-indicator__container">
            {stages.map((stage, idx) => <div
                key={makeId(5)}
                title={stage}
                className={"stage-container" + ((activeStage > idx) ? ' fully-active' : '') + ((activeStage === idx) ? ' active' : '')}>
                {stage}
            </div>)}
        </div>
    )
}


type Props = {
    stages: string[]
}