import { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"


const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })


export const BackToTop = ({ footerHeight }: propsType) => {
    const [isShouldRender, setIsShouldRender] = useState(false)
    const [buttonBottomPrefix, setButtonBottomPrefix] = useState(0)
    const buttonRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>


    const handleScroll = useCallback(() => {
        const BUTTON_HEIGHT = +buttonRef?.current?.clientHeight
        const WINDOW_HEIGHT = window.innerHeight
        const WINDOW_SCROLL_Y = window.scrollY
        const CONTENT_HEIGHT = document.body.offsetHeight

        // If content height equal to viewport height return (isShouldRender stays falsy)
        if (CONTENT_HEIGHT === WINDOW_HEIGHT) return

        // If client scroll less or equal to button height and isShouldRender is on (prev state) => setIsShouldRender to false.
        if ((WINDOW_SCROLL_Y <= BUTTON_HEIGHT) && isShouldRender) {
            setIsShouldRender(false)
            setButtonBottomPrefix(0)
        }

        // If footer is in the client viewport set a buttom prefix to the button
        else if ((CONTENT_HEIGHT - WINDOW_HEIGHT - WINDOW_SCROLL_Y) < footerHeight) {
            setButtonBottomPrefix((CONTENT_HEIGHT - WINDOW_HEIGHT - WINDOW_SCROLL_Y - footerHeight) * -1)
        }

        // If client scroll more than button height => setIsShouldRender to true
        else if (WINDOW_SCROLL_Y > BUTTON_HEIGHT) {
            setIsShouldRender(true)
            setButtonBottomPrefix(0)
        }
    }, [isShouldRender, footerHeight])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])


    return (
        <div className="app-header--app-data__back-to-top-container" ref={buttonRef} style={{ bottom: buttonBottomPrefix }}>
            <button onClick={scrollToTop}>
                <AiOutlineArrowUp />
            </button>
        </div>
    )
}


type propsType = {
    footerHeight: number
}