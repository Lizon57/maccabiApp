import { AiOutlineArrowUp } from "react-icons/ai"
import { useWindowScrollY } from "../../../../hooks/use-window-scroll-y"


const ON_SCROLL_TO_TOP = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const ScrollToTop = () => {
    const shouldRenderButton = (useWindowScrollY() > 30)

    return (
        <div
            className={'app-data--scrol-to-top__container' + (!shouldRenderButton ? ' hide' : '')}
            onClick={ON_SCROLL_TO_TOP}
            title="חזור לראש הדף"
        >
            <AiOutlineArrowUp />
        </div>
    )
}