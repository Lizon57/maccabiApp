import { Helmet } from 'react-helmet'
import AppLogo from "../../../assets/images/wide-logo.png"

const DEFAULT_MAP = {
    appTitle: <title>מכביפדיה</title>,
    openGraphTitle: <meta property="og:tigle" content="מכביפדיה"></meta>,
    pageDescription: <meta name="description" content="מכביפדיה - המוזיאון הדיגיטלי של אגודת הספורט הכי גדולה, הכי יפה והכי מצליחה. כל המידע ההיסטורי על מכבי תל אביב במקום אחד!" />,
    openGraphDescription: <meta property="og:description" content="בקרו במוזיאון מכבי תל אביב!"></meta>,
    openGraphImage: <meta property="og:image" content={AppLogo}></meta>,
    indexFollow: <meta name="robots" content="index, follow" />,
}


export const SeoImplement = ({ appTitle, openGraphTitle, pageDescription, openGraphImage, openGraphDescription, noIndex }: Props) => {
    return (
        <Helmet>
            {(appTitle?.length) ? <title>מכביפדיה - {appTitle}</title> : DEFAULT_MAP.appTitle}
            {(openGraphTitle) ? <meta property="og:title" content={openGraphTitle} /> : DEFAULT_MAP.openGraphTitle}
            {(pageDescription) ? <meta name="description" content={pageDescription} /> : DEFAULT_MAP.pageDescription}
            {openGraphImage ? <meta name="og:image" content={openGraphImage} /> : DEFAULT_MAP.openGraphImage}
            {openGraphDescription ? <meta name="og:description" content={openGraphDescription} /> : DEFAULT_MAP.openGraphDescription}
            {noIndex ? <meta name="robots" content="none" /> : DEFAULT_MAP.indexFollow}
        </Helmet>
    )
}


type Props = {
    appTitle?: string
    openGraphTitle?: string
    pageDescription?: string
    openGraphDescription?: string
    openGraphImage?: string
    noIndex?: boolean
}