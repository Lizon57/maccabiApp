import { useEffect } from 'react'
import { setPageDataCmpType } from '../../store/action/app-layout-action'


export const usePageDataCmp = (type: string) => {
    useEffect(() => {
        setPageDataCmpType(type)

        return () => {
            setPageDataCmpType('social-network-preview')
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
}