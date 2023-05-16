
import classNames from "classnames"
import { AiOutlineArrowUp } from "react-icons/ai"
import { useWindowScrollY } from "../../../../hooks/use-window-scroll-y"


const ON_SCROLL_TO_TOP = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const ScrollToTop = () => {
    const shouldHideButton = !(useWindowScrollY() > 30)

    return (
        <button
            className={classNames('app-data--scrol-to-top__container', { hide: shouldHideButton })}
            onClick={ON_SCROLL_TO_TOP}
            title="חזור לראש הדף"
        >
            <AiOutlineArrowUp />
        </button>
    )
}