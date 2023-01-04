import { useEffect } from "react"
import { useStoreSelector } from "../../../hooks/store/use-store-selector"
import { useWindowSize } from "../../../hooks/use-window-size"
import { useWindowScrollY } from "../../../hooks/use-window-scroll-y"


export const AppAdditionalContent = ({ isBlockEnd = false, children }: Props) => {
    const { appFooterClientHeight } = useStoreSelector(state => state.appLayout)
    const scrollY = useWindowScrollY()
    const { height: windowHeight } = useWindowSize()
    const { offsetHeight } = document.body

    useEffect(() => {
        let appFooterPixelsInViewPort = offsetHeight - windowHeight - scrollY - appFooterClientHeight

        appFooterPixelsInViewPort *= (appFooterPixelsInViewPort * -1 < 0) ? 0 : -1

        document.documentElement.style.setProperty('--app-additional-content-app-footer-in-view', appFooterPixelsInViewPort + 'px')
    }, [scrollY, windowHeight, offsetHeight, appFooterClientHeight])


    return (
        <aside className={'app-layout--app-additional-content__container' + (isBlockEnd ? ' block-end-container' : '')}>
            <div className="content">
                {children}
            </div>
        </aside>
    )
}


type Props = {
    isBlockEnd?: boolean
    children: JSX.Element
}