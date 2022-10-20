import { useState } from "react"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { LaptopWidePlusStageIndicator } from "./laptop-wide-pluts-stage-indicator"
import { UpToLaptopWideStageIndicator } from "./up-to-laptop-wide-stage-indicator"


export const StageIndicator = ({ stages }: Props) => {
    const [currStage] = useState(0)
    const [activeStage, setActiveState] = useState(0)

    const onStageClick = (stageIdx: number) => {
        if (stageIdx > currStage) return
        setActiveState(stageIdx)
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
    stages: string[]
}