export const UpToLaptopWideStageIndicator = ({ stages, activeStage, currStage }: Props) => {
    return (
        <div className="entity-add-cmp--up-to-laptop-wide-stage-indicator__container">
            <button className={"prev-stage" + (currStage + 1 < 2 ? ' disable' : '')}>הקודם</button>

            <div className="stage-indicator">
                <span className="stage-counter">{currStage + 1}/{stages.length}</span>
                <span className="curr-stage-name">{stages[activeStage]}</span>
            </div>

            <button className={"next-stage" + (currStage <= activeStage ? ' disable' : '')}>הבא</button>
        </div>
    )
}


type Props = {
    stages: string[],
    activeStage: number,
    currStage: number
}