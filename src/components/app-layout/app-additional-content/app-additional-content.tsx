import { useEffect } from "react"

import { useStoreSelector } from "../../../hooks/store/use-store-selector"
import { useWindowSize } from "../../../hooks/use-window-size"
import { useWindowScrollY } from "../../../hooks/use-window-scroll-y"


export const AppAdditionalContent = ({ isBlockEnd = false, children }: Props) => {
    const { appFooterClientHeight } = useStoreSelector(state => state.appLayout)
    const scrollY = useWindowScrollY()
    const WINDOW_HEIGHT = useWindowSize().height
    const CONTENT_HEIGHT = document.body.offsetHeight

    useEffect(() => {
        let appFooterPixelsInViewPort = 0

        if (((CONTENT_HEIGHT - WINDOW_HEIGHT - scrollY - appFooterClientHeight) * -1) <= 0) {
            appFooterPixelsInViewPort = 0;
        } else {
            appFooterPixelsInViewPort = (CONTENT_HEIGHT - WINDOW_HEIGHT - scrollY - appFooterClientHeight) * -1
        }

        document.documentElement.style.setProperty('--app-additional-content-app-footer-in-view', `${appFooterPixelsInViewPort}px`)
    }, [scrollY, WINDOW_HEIGHT, CONTENT_HEIGHT, appFooterClientHeight])


    return (
        <aside className={'app-layout--app-additional-content__container' + (isBlockEnd ? ' block-end-container' : '')}>
            <div className="content">
                {children}
            </div>
        </aside>
    )
}


type Props = {
    isBlockEnd?: boolean,
    children: JSX.Element,
}