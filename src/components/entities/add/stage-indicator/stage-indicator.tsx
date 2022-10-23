import { AiOutlinePlus } from "react-icons/ai"

import { EntityAddItemStage } from "../../../../types/entity/add/entity-add-item-stage"

import { MainTitle } from "../../../common/main-title/main-title"
import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { LaptopWidePlusStageIndicator } from "./laptop-wide-plus-stage-indicator"
import { UpToLaptopWideStageIndicator } from "./up-to-laptop-wide-stage-indicator"


export const StageIndicator = ({ stages, stageStatus }: Props) => {
    return (
        <div className="entity-add-cmp--stage-indicator__container">
            <MainTitle text="הוספת פריט" Icon={AiOutlinePlus} />

            <RenderByDeviceWidth maxDeviceWide="tablet" isInclusive={true}>
                <UpToLaptopWideStageIndicator
                    stages={stages}
                    stageStatus={stageStatus}
                />
            </RenderByDeviceWidth>

            <RenderByDeviceWidth minDeviceWide="tablet">
                <LaptopWidePlusStageIndicator
                    stages={stages}
                    stageStatus={stageStatus}
                />
            </RenderByDeviceWidth>
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