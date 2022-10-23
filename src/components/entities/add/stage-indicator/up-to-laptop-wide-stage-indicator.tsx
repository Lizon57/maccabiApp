import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { Dropdown } from "../../../common/dropdown/dropdown"


export const UpToLaptopWideStageIndicator = ({ stages, stageStatus }: Props) => {
    const { currActiveStageIdx, lastAchieveStageIdx, isNextStageAvailable } = stageStatus

    return (
        <div className="entity-add-cmp--up-to-laptop-wide-stage-indicator__container">
            {!!currActiveStageIdx && <button className="prev">שלב קודם</button>}

            <Dropdown
                controllerText={`${currActiveStageIdx + 1}/${stages.length}`}
                title="ניווט בשלבי הוספה"
            >
                <div className="dropdown-children-container">
                    {stages.map((stage, idx) => <div
                        key={stage.title}
                        className={"stage-preview"
                            + (currActiveStageIdx === idx ? ' active' : '')
                            + (idx <= lastAchieveStageIdx ? ' available' : '')
                        }
                        title={idx <= lastAchieveStageIdx
                            ? currActiveStageIdx === idx
                                ? stages[idx].title
                                : `חזור אל ${stages[idx].title}`
                            : `השלם את השלבים הנדרשים כדי לעבור לשלב ${stages[idx].title}`}
                    >{stage.title}</div>)}
                </div>
            </Dropdown>

            <button
                className={"next" + (isNextStageAvailable ? '' : ' disable')}
                title={isNextStageAvailable
                    ? (currActiveStageIdx + 1 === stages.length) ? 'הוסף פריט' : `המשך לשלב הבא (${stages[currActiveStageIdx + 1].title})`
                    : 'השלם את שלב זה כדי לעבור לשלב הבא'}
            >
                {(currActiveStageIdx + 1 === stages.length) ? 'הוסף' : 'שלב הבא'}
            </button>

            <span className="stage-title">{stages[currActiveStageIdx].title}</span>
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