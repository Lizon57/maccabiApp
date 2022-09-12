import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

// Use throughout app instead of plain `useSelector`
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector