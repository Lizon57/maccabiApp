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


    return (
        <div className="entity-save-cmp--up-to-tablet-wide-stage-stepper__container">
            {!!currStageIdx && <button
                title={`שלב קודם (${stages[currStageIdx - 1].title})`}
                className={"prev" + (stagesStatus[currStageIdx - 1] ? '' : 'fail')}
                onClick={() => changeCurrStageIdx(currStageIdx - 1)}
            >
                שלב קודם
            </button>}

            <Dropdown
                controllerText={`${currStageIdx + 1}/${stages.length}`}
                title="ניווט בשלבי הוספה"
            >
                <div className="dropdown-children-container">
                    {stages.map((stage, idx) => <div
                        key={stage.title}
                        className={"stage-preview"
                            + (currStageIdx === idx ? ' active' : '')
                            + (stagesStatus[idx] ? ' available' : '')
                            + ((stagesStatus[idx] && (idx > currStageIdx) ? ' completed' : ''))
                            + ((!stagesStatus[idx] && (idx < currStageIdx)) ? ' fail' : '')
                        }
                        title={
                            (idx === currStageIdx)
                                ? stages[idx].title
                                : ((idx > currStageIdx) && !stagesStatus[idx])
                                    ? `השלם את השלבים הנדרשים כדי לעבור לשלב ${stages[idx].title}`
                                    : `חזור אל ${stages[idx].title}`
                        }
                        onClick={() => onChangeCurrStageIdx(idx)}
                    > {stage.title}</div>)}
                </div>
            </Dropdown >

            {
                stagesStatus[currStageIdx + 1] && (currStageIdx + 1 !== stagesStatus.length) && <button
                    className="next"
                    title={`המשך לשלב הבא (${stages[currStageIdx + 1].title})`}
                    onClick={() => changeCurrStageIdx(currStageIdx + 1)}
                >
                    {(currStageIdx + 1 === stages.length) ? 'שמור' : 'שלב הבא'}
                </button>
            }

            < span className="stage-title" > {stages[currStageIdx].title}</span >

            {getIsSaveable() &&
                <button className="save" title="שמור" onClick={saveItem}>שמור</button>
            }
        </div >
    )
}


type Props = {
    stages: EntitySaveItemStage[]
    stagesStatus: boolean[]
    currStageIdx: number
    changeCurrStageIdx: (idx: number) => void
    saveItem: () => Promise<void>
}