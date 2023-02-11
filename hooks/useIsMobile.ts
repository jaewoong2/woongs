import { useCallback } from 'react'
import { setIsMobile } from 'slices/styleSlice'
import { useAppDispatch, useAppSelector } from './useReducerHook'

const useIsMobile = () => {
  const { isMobile } = useAppSelector((state) => state.styleSlice)
  const dispatch = useAppDispatch()

  const setMobile = useCallback(
    (value: boolean) => {
      dispatch(setIsMobile(value))
    },
    [dispatch]
  )

  return [isMobile, setMobile] as const
}

export default useIsMobile
