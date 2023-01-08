import { useStoreSelector } from "../../../hooks/store/use-store-selector"

import { RenderByDeviceWidth } from "../../common/render-by/render-by-device-width"
import { AppAdditionalContent } from "../app-additional-content/app-additional-content"
import { DynamicPageDataCmp } from "./dynamic-page-data-cmp/dynamic-page-data-cmp"


export const PageRelatedData = () => {
    const { pageDataCmpType } = useStoreSelector(state => state.appLayout)

    return (
        <AppAdditionalContent>
            <RenderByDeviceWidth minDeviceWide="wide">
                <DynamicPageDataCmp type={pageDataCmpType} />
            </RenderByDeviceWidth>
        </AppAdditionalContent>
    )
}