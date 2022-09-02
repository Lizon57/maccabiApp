import { useEffect, useState } from "react"
import { useWindowSize } from "../../../hooks/use-window-size"


const POSSIBLE_SIZE = {
    smallMobile: 350,
    mobile: 550,
    tablet: 900,
    laptop: 1080,
    wide: 1300
}


export const RenderByDeviceWidth = ({ children, minDeviceWide, maxDeviceWide }: propsType) => {
    const ACTUAL_DEVICE_SIZE = useWindowSize().width
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
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

    }, [ACTUAL_DEVICE_SIZE, minDeviceWide, maxDeviceWide, shouldRender])


    // useEffect(() => {
    //     switch (device) {
    //         case 'smallMobile':
    //             if (ACTUAL_DEVICE_SIZE < POSSIBLE_SIZE.smallMobile) setShouldRender(true)
    //             else if (shouldRender) setShouldRender(false)
    //             return

    //         case 'mobile':
    //             if (ACTUAL_DEVICE_SIZE < POSSIBLE_SIZE.mobile) setShouldRender(true)
    //             else if (shouldRender) setShouldRender(false)
    //             return

    //         case 'tablet':
    //             if ((ACTUAL_DEVICE_SIZE > POSSIBLE_SIZE.mobile) && ACTUAL_DEVICE_SIZE < POSSIBLE_SIZE.laptop) setShouldRender(true)
    //             else if (shouldRender) setShouldRender(false)
    //             return

    //         case 'laptop':
    //             if ((ACTUAL_DEVICE_SIZE > POSSIBLE_SIZE.tablet) && (ACTUAL_DEVICE_SIZE < POSSIBLE_SIZE.laptop)) setShouldRender(true)
    //             else if (shouldRender) setShouldRender(false)
    //             return

    //         case 'wide':
    //             if (ACTUAL_DEVICE_SIZE > POSSIBLE_SIZE.laptop) setShouldRender(true)
    //             else if (shouldRender) setShouldRender(false)
    //             return


    //         default:
    //             if (shouldRender) setShouldRender(false)
    //     }
    // }, [ACTUAL_DEVICE_SIZE, device, shouldRender])


    return shouldRender ? <>{children}</> : null
}


type propsType = {
    minDeviceWide?: device,
    maxDeviceWide?: device
    children: JSX.Element
}

type device = 'smallMobile' | 'mobile' | 'tablet' | 'laptop' | 'wide'