
import { EntitySaveItemStage } from "../../../../types/entity/save/entity-save-item-stage"

import { RenderByDeviceWidth } from "../../../common/render-by/render-by-device-width"
import { TabletWidePlusStageStepper } from "./tablet-wide-plus-stage-stepper"
import { UpToTabletWideStageStepper } from "./up-to-tablet-wide-stage-stepper"


export const StageStepper = ({ stages, stagesStatus, currStageIdx, changeCurrStageIdx, saveItem }: Props) => {
    const basicProps = { stages, stagesStatus, currStageIdx, changeCurrStageIdx }

    return (
        <section className="entity-save-cmp--stage-stepper__container">
            <RenderByDeviceWidth maxDeviceWide="tablet">
                <UpToTabletWideStageStepper
                    {...basicProps}
                    saveItem={saveItem}
                />
            </RenderByDeviceWidth>

            <RenderByDeviceWidth minDeviceWide="tablet">
                <TabletWidePlusStageStepper {...basicProps} />
            </RenderByDeviceWidth>
        </section>
    )
}


type Props = {
    stages: EntitySaveItemStage[]
    stagesStatus: boolean[]
    currStageIdx: number
    changeCurrStageIdx: (idx: number) => void
    saveItem: () => Promise<void>
}