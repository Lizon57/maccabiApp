import { useEffect } from 'react'
import { setPageType } from '../../store/action/app-layout-action'


export const usePageType = (type: string) => {
    useEffect(() => {
        setPageType(type)

        return () => {
            setPageType(null)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
}