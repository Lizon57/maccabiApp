import { EntityItemAddStage } from "../../../../types/entity/add/entity-item-add-stage"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { LaptopWidePlusStageIndicator } from "./laptop-wide-plus-stage-indicator"
import { UpToLaptopWideStageIndicator } from "./up-to-laptop-wide-stage-indicator"


export const StageIndicator = ({ stages, currStage, activeStage }: Props) => {
    const onStageClick = (stageIdx: number) => {
        if (stageIdx > currStage) return
    }


    return (
        <>
            <RenderByDeviceWidth maxDeviceWide="tablet" isInclusive={true}>
                <UpToLaptopWideStageIndicator
                    stages={stages}
                    activeStage={activeStage}
                    currStage={currStage} />
            </RenderByDeviceWidth>

            <RenderByDeviceWidth minDeviceWide="tablet">
                <LaptopWidePlusStageIndicator
                    stages={stages}
                    activeStage={activeStage}
                    currStage={currStage}
                    onStageClick={onStageClick} />
            </RenderByDeviceWidth>
        </>
    )
}


type Props = {
    stages: EntityItemAddStage[],
    currStage: number,
    activeStage: number
}