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
                className={"stage-container"
                    + ((title === stages[currStageIdx].title) ? ' active' : '')
                    + ((!stagesStatus[idx] && (idx < currStageIdx)) ? ' fail' : '')
                    + (((currStageIdx > idx) && stagesStatus[idx]) ? ' complete' : '')
                    + ((stagesStatus[idx] && (idx > currStageIdx) ? ' completed' : ''))
                }
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