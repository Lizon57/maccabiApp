import { AiOutlineArrowUp } from "react-icons/ai"
import { useWindowScrollY } from "../../../../hooks/use-window-scroll-y"


const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

export const ScrollToTop = () => {
    const shouldRender = (useWindowScrollY() > 30)

    return (
        <div className={"app-data--scrol-to-top__container" + (!shouldRender ? ' deactive' : '')} onClick={scroll} title="חזור לראש הדף">
            <AiOutlineArrowUp />
        </div>
    )
}