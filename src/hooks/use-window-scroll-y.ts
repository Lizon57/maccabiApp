import { useState, useEffect } from "react"
import { useDebounce } from "./use-debounce"

export const useWindowScrollY = (): number => {
    const [windowScrollY, setWindowScrolY] = useState<number>(window.scrollY)

    const handleScroll = () => setWindowScrolY(window.scrollY)
    const debouncedHandleScroll = useDebounce(handleScroll, 100)

    useEffect(() => {
        window.addEventListener('scroll', debouncedHandleScroll)

        return () => window.removeEventListener('scoll', debouncedHandleScroll);
    }, [debouncedHandleScroll])


    return windowScrollY
}