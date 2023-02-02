import { useEffect, useState } from "react"
import { useWindowSize } from "../../../hooks/use-window-size"


const SIZE_MAP = {
    smallMobile: 350,
    mobile: 550,
    tablet: 900,
    laptop: 1080,
    wide: 1400
}


export const RenderByDeviceWidth = ({ children, minDeviceWide, maxDeviceWide, isInclusive }: Props) => {
    const { width: actualDeviceWidth } = useWindowSize()
    const [shouldRender, setShouldRender] = useState(false)


    useEffect(() => {
        if (isInclusive) {
            if (minDeviceWide && maxDeviceWide) {
                if ((actualDeviceWidth >= SIZE_MAP[minDeviceWide]) && (actualDeviceWidth <= SIZE_MAP[maxDeviceWide])) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (minDeviceWide) {
                if (actualDeviceWidth >= SIZE_MAP[minDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (maxDeviceWide) {
                if (actualDeviceWidth <= SIZE_MAP[maxDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }
        } else {
            if (minDeviceWide && maxDeviceWide) {
                if ((actualDeviceWidth > SIZE_MAP[minDeviceWide]) && (actualDeviceWidth < SIZE_MAP[maxDeviceWide])) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (minDeviceWide) {
                if (actualDeviceWidth > SIZE_MAP[minDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (maxDeviceWide) {
                if (actualDeviceWidth < SIZE_MAP[maxDeviceWide]) {
                    !shouldRender && setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }
        }
    }, [actualDeviceWidth, minDeviceWide, maxDeviceWide, isInclusive, shouldRender])


    return shouldRender ? <>{children}</> : null
}


type Props = {
    minDeviceWide?: Device
    maxDeviceWide?: Device
    isInclusive?: boolean
    children: JSX.Element
}

type Device = 'smallMobile' | 'mobile' | 'tablet' | 'laptop' | 'wide'