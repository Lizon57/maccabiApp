import { Helmet } from 'react-helmet'

const DEFAULT_MAP = {
    appTitle: <title>מכביפדיה</title>,
    pageDescription: <meta name="description" content="מכביפדיה - המוזיאון הדיגיטלי של אגודת הספורט הכי גדולה, הכי יפה והכי מצליחה. כל המידע ההיסטורי על מכבי תל אביב במקום אחד!" />,
    indexFollow: <meta name="robots" content="index, follow" />
}


export const SeoImplement = ({ appTitle, pageDescription, noIndex }: Props) => {
    return (
        <Helmet>
            {(appTitle?.length) ? <title>מכביפדיה - {appTitle}</title> : DEFAULT_MAP.appTitle}
            {(pageDescription?.length) ? <meta name="description" content={pageDescription} /> : DEFAULT_MAP.pageDescription}
            {noIndex ? <meta name="robots" content="none" /> : DEFAULT_MAP.indexFollow}
        </Helmet>
    )
}


type Props = {
    appTitle?: string
    pageDescription?: string,
    noIndex?: boolean
}