import { useEffect, useState, useCallback, useRef } from "react"
import classNames from "classnames"
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, TelegramShareButton } from "react-share"
import { useDelayUnmount } from "../../../../hooks/use-delay-unmount"
import { useOnWindowResize } from "../../../../hooks/use-on-window-resize"

import { AiOutlineShareAlt } from "react-icons/ai"
import { FaWhatsapp, FaFacebook, FaTwitter, FaTelegram } from "react-icons/fa"
import { useOnClickOutside } from "../../../../hooks/use-on-click-outside"

const PAGE_LINK = window.location.href
const PAGE_TITLE = document.title
const HASHTAGS = ['#yellow', '#maccabi', '#maccabitelaviv', '#yallamaccabi', '#wearemaccabi', '#mtafc', '#מכבי', '#מכביתלאביב', '#ייאלהמכבי', '#צהובעולה', '#מכביפדיה']
const HASHTAG = '#מכביפדיה'

export const Share = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [shouldOpenToRight, setShouldOpenToRight] = useState(true)
    const elShareContainer = useRef<HTMLDivElement>(null)

    useOnClickOutside(elShareContainer, () => setIsOpen(false))
    const shouldRenderList = useDelayUnmount(isOpen, 300)

    const onWindowResize = useCallback(() => {
        const { innerWidth } = window
        if (innerWidth < 1400 && !shouldOpenToRight) setShouldOpenToRight(true)
        else if (innerWidth >= 1400 && shouldOpenToRight) setShouldOpenToRight(false)
    }, [shouldOpenToRight])

    useEffect(() => {
        onWindowResize()
    }, [onWindowResize])

    const toggleIsOpen = () => setIsOpen(!isOpen)
    useOnWindowResize(onWindowResize)


    return (
        <div className="app-data--share__container" ref={elShareContainer} title="שתף עמוד">
            {shouldRenderList && <div
                className={classNames('share-list-container', { open: isOpen }, (shouldOpenToRight ? 'right-sided' : 'left-sided'))}
            >
                <WhatsappShareButton url={PAGE_LINK} title={`רציתי לשתף איתך את העמוד ${PAGE_TITLE} מאתר מכביפדיה!`} separator="-">
                    <span className="whatsapp" title="שתף בווטסאפ"><FaWhatsapp /></span>
                </WhatsappShareButton>
                <FacebookShareButton url={PAGE_LINK} quote={`משתף את העמוד ${PAGE_TITLE} מאתר מכביפדיה!`} hashtag={HASHTAG}>
                    <span className="facebook" title="שתף בפייסבוק"><FaFacebook /></span>
                </FacebookShareButton>
                <TwitterShareButton url={PAGE_LINK} title={`משתף את העמוד ${PAGE_TITLE} מאתר מכביפדיה!`} hashtags={HASHTAGS}>
                    <span className="twitter" title="שתף בטוויטר"><FaTwitter /></span>
                </TwitterShareButton>
                <TelegramShareButton url={PAGE_LINK} title={`רציתי לשתף איתך את העמוד ${PAGE_TITLE} מאתר מכביפדיה!`}>
                    <span className="telegram" title="שתף בטלגרם"><FaTelegram /></span>
                </TelegramShareButton>
            </div>}

            <button className="share-toggler" onClick={toggleIsOpen}>
                <AiOutlineShareAlt />
            </button>
        </div >
    )
}