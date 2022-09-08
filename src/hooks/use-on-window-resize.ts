import { useEffect } from "react"
import { useDebounce } from "./use-debounce"

export const useOnWindowResize = (cb: () => void) => {
    const handleResize = () => cb()
    const debouncedHandleResize = useDebounce(handleResize, 100)

    useEffect(() => {
        window.addEventListener('resize', debouncedHandleResize)

        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, [debouncedHandleResize])


    return
}