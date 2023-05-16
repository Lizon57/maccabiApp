import classNames from "classnames"

import { EntitySaveItemStage } from "../../../../types/entity/save/entity-save-item-stage"

import { Dropdown } from "../../../common/dropdown/dropdown"


export const UpToTabletWideStageStepper = ({ stages, stagesStatus, currStageIdx, changeCurrStageIdx, saveItem }: Props) => {
    const getIsSaveable = () => {
        const saveableIdx = stagesStatus.findIndex(status => status === false)
        return (saveableIdx === -1) ? true : false
    }


    const onChangeCurrStageIdx = (idx: number) => {
        if ((idx === currStageIdx) || (!stagesStatus[idx] && currStageIdx < idx)) return
        changeCurrStageIdx(idx)
    }

    const prevStageIdx = currStageIdx - 1
    const nextStageIdx = currStageIdx + 1


    return (
        <div className="entity-save-cmp--up-to-tablet-wide-stage-stepper__container">
            {!!currStageIdx && <button
                title={`שלב קודם (${stages[prevStageIdx].title})`}
                className={classNames('prev', { fail: !stagesStatus[prevStageIdx] })}
                onClick={() => changeCurrStageIdx(prevStageIdx)}
            >
                שלב קודם
            </button>}

            <Dropdown
                controllerText={`${nextStageIdx}/${stages.length}`}
                title="ניווט בשלבי הוספה"
            >
                <div className="dropdown-children-container">
                    {stages.map(({ title }, idx) => <div
                        key={title}
                        className={classNames('stage-preview', {
                            active: (currStageIdx === idx),
                            available: stagesStatus[idx],
                            completed: (stagesStatus[idx] && (idx > currStageIdx)),
                            fail: (!stagesStatus[idx] && (idx < currStageIdx))
                        })}
                        title={
                            (idx === currStageIdx)
                                ? stages[idx].title
                                : ((idx > currStageIdx) && !stagesStatus[idx])
                                    ? `השלם את השלבים הנדרשים כדי לעבור לשלב ${stages[idx].title}`
                                    : `חזור אל ${stages[idx].title}`
                        }
                        onClick={() => onChangeCurrStageIdx(idx)}
                    > {title}</div>)}
                </div>
            </Dropdown >

            {
                stagesStatus[nextStageIdx] && (nextStageIdx !== stagesStatus.length) && <button
                    className="next"
                    title={`המשך לשלב הבא (${stages[nextStageIdx].title})`}
                    onClick={() => changeCurrStageIdx(nextStageIdx)}
                >
                    {(nextStageIdx === stages.length) ? 'שמור' : 'שלב הבא'}
                </button>
            }

            <span className="stage-title" > {stages[currStageIdx].title}</span>

            {getIsSaveable() &&
                <button className="save" title="שמור" onClick={saveItem}>שמור</button>
            }
        </div>
    )
}


type Props = {
    stages: EntitySaveItemStage[]
    stagesStatus: boolean[]
    currStageIdx: number
    changeCurrStageIdx: (idx: number) => void
    saveItem: () => Promise<void>
}