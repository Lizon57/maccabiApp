import { useEffect, useState } from "react"
import { useWindowSize } from "../../../hooks/use-window-size"


const POSSIBLE_SIZE = {
    smallMobile: 350,
    mobile: 550,
    tablet: 900,
    laptop: 1080,
    wide: 1400
}


export const RenderByDeviceWidth = ({ children, minDeviceWide, maxDeviceWide, isInclusive }: Props) => {
    const ACTUAL_DEVICE_SIZE = useWindowSize().width
    const [shouldRender, setShouldRender] = useState(false)


    useEffect(() => {
        if (isInclusive) {
            if (minDeviceWide && maxDeviceWide) {
                if ((ACTUAL_DEVICE_SIZE >= POSSIBLE_SIZE[minDeviceWide]) && (ACTUAL_DEVICE_SIZE <= POSSIBLE_SIZE[maxDeviceWide])) {
                    if (shouldRender) return
                    setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (minDeviceWide) {
                if (ACTUAL_DEVICE_SIZE >= POSSIBLE_SIZE[minDeviceWide]) {
                    if (shouldRender) return
                    setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (maxDeviceWide) {
                if (ACTUAL_DEVICE_SIZE <= POSSIBLE_SIZE[maxDeviceWide]) {
                    if (shouldRender) return
                    setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }
        } else {
            if (minDeviceWide && maxDeviceWide) {
                if ((ACTUAL_DEVICE_SIZE > POSSIBLE_SIZE[minDeviceWide]) && (ACTUAL_DEVICE_SIZE < POSSIBLE_SIZE[maxDeviceWide])) {
                    if (shouldRender) return
                    setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (minDeviceWide) {
                if (ACTUAL_DEVICE_SIZE > POSSIBLE_SIZE[minDeviceWide]) {
                    if (shouldRender) return
                    setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }

            else if (maxDeviceWide) {
                if (ACTUAL_DEVICE_SIZE < POSSIBLE_SIZE[maxDeviceWide]) {
                    if (shouldRender) return
                    setShouldRender(true)
                } else if (shouldRender) setShouldRender(false)
            }
        }
    }, [ACTUAL_DEVICE_SIZE, minDeviceWide, maxDeviceWide, isInclusive, shouldRender])


    return shouldRender ? <>{children}</> : null
}


type Props = {
    minDeviceWide?: device,
    maxDeviceWide?: device,
    isInclusive?: boolean,
    children: JSX.Element
}

type device = 'smallMobile' | 'mobile' | 'tablet' | 'laptop' | 'wide'