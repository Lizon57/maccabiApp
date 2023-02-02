import { useCallback, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux"
import { setAppFooterClientHeight } from "../../../store/action/app-layout-action"
import { RootState } from "../../../store/store"

import { useOnWindowResize } from "../../../hooks/use-on-window-resize"

import { SOCIAL_NETWORKS } from "../../../constans/social-networks"


export const AppFooter = () => {
    const { appFooterClientHeight } = useSelector((state: RootState) => state.appLayoutModule)
    const elAppFooter = useRef<HTMLDivElement>(null)


    const handleAppFooterRefUpdate = useCallback(() => {
        const footerClientHeight = elAppFooter.current?.clientHeight || 0

        if (!elAppFooter.current || (footerClientHeight === appFooterClientHeight)) return
        setAppFooterClientHeight(footerClientHeight)
    }, [appFooterClientHeight])


    useEffect(() => {
        handleAppFooterRefUpdate()
    }, [elAppFooter, handleAppFooterRefUpdate])


    useOnWindowResize(handleAppFooterRefUpdate)


    return (
        <footer className="app-layout--app-footer" ref={elAppFooter}>
            <div className="content">
                <div className="internal-links-container">
                    <Link to="#" title="מי את מכביפדיה?">אודות</Link>
                    <Link to="#" title="הצטרפות לצוות? יש בידך פריט? עזרו לנו לגדול!">עזרו לנו</Link>
                    <Link to="#" title="מצאתי טעות באתר">דווח על טעות</Link>
                </div>

                <div className="social-networks-links-container">
                    <span className="title" title="עקבו אחרי מכביפדיה (גם) ברשתות החברתיות">עקבו אחרינו</span>

                    <span className="social-networks-icons-container">
                        {SOCIAL_NETWORKS.map(({ path, name, icon: Icon }) => {
                            return (<a key={path} href={path} target="_blank" rel="noreferrer">
                                <Icon title={`מכביפדיה ב${name}`} />
                            </a>)
                        }
                        )}
                    </span>
                </div>
            </div>
        </footer>
    )
}