import { useEffect } from 'react'
import { setPageDataCmpType } from '../../store/action/app-layout-action'


export const usePageDataCmp = (type: string) => {
    useEffect(() => {
        setPageDataCmpType(type)

        return () => {
            setPageDataCmpType('join-us')
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
}