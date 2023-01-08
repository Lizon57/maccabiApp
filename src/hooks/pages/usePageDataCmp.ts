import { useEffect } from 'react'
import { setPageDataCmpType } from '../../store/slicer/app-layout-slicer'
import { useStoreDispatch } from '../store/use-store-dispatch'


export const usePageDataCmp = (type: string) => {
    const dispatch = useStoreDispatch()

    useEffect(() => {
        dispatch(setPageDataCmpType(type))

        return () => {
            dispatch(setPageDataCmpType('social-network-preview'))
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
}