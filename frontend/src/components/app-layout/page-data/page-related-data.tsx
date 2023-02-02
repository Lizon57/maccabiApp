import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"

import { RenderByDeviceWidth } from "../../common/render-by/render-by-device-width"
import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { DynamicPageDataCmp } from "./dynamic-page-data-cmp/dynamic-page-data-cmp"


export const PageRelatedData = () => {
    const { pageDataCmpType } = useSelector((state: RootState) => state.appLayoutModule)

    return (
        <AppAdditionalContent>
            <RenderByDeviceWidth minDeviceWide="wide">
                <DynamicPageDataCmp type={pageDataCmpType} />
            </RenderByDeviceWidth>
        </AppAdditionalContent>
    )
}