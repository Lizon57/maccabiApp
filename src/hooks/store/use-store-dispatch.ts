import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'

// Use throughout app instead of plain `useDispatch`
export const useStoreDispatch = () => useDispatch<AppDispatch>()