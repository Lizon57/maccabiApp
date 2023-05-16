import classNames from "classnames"
import { EntitySaveItemStage } from "../../../../types/entity/save/entity-save-item-stage"


export const TabletWidePlusStageStepper = ({ stages, stagesStatus, currStageIdx, changeCurrStageIdx }: Props) => {
    const onChangeCurrStageIdx = (idx: number) => {
        if ((idx === currStageIdx) || (!stagesStatus[idx] && currStageIdx < idx)) return
        changeCurrStageIdx(idx)
    }

    return (
        <div className="entity-save-cmp--tablet-wide-plus-stage-stepper__container">
            {stages.map(({ title }, idx) => <div
                key={title}
                title={idx <= currStageIdx
                    ? currStageIdx === idx
                        ? stages[idx].title
                        : `חזור אל ${stages[idx].title}`
                    : `השלם את השלבים הנדרשים כדי לעבור לשלב ${stages[idx].title}`}
                className={classNames('stage-container', {
                    active: (title === stages[currStageIdx].title),
                    fail: (!stagesStatus[idx] && (idx < currStageIdx)),
                    complete: ((currStageIdx > idx) && stagesStatus[idx]),
                    completed: (stagesStatus[idx] && (idx > currStageIdx))
                })}
                onClick={() => onChangeCurrStageIdx(idx)}
            >
                {title}
            </div>)}
        </div>
    )
}


type Props = {
    stages: EntitySaveItemStage[]
    stagesStatus: boolean[]
    currStageIdx: number
    changeCurrStageIdx: (idx: number) => void
}