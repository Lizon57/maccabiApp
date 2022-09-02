import { useState, useEffect } from "react"
import { useDebounce } from "./use-debounce"

export const useWindowSize = (): viewportSize => {
    const [windowSize, setWindowSize] = useState<viewportSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    const debouncedHandleResize = useDebounce(handleResize, 100)

    useEffect(() => {
        window.addEventListener('resize', debouncedHandleResize)

        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, [debouncedHandleResize])


    return windowSize
}


type viewportSize = {
    width: number;
    height: number;
}