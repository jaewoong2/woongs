import { useCallback } from 'react'
import { setIsFullPage } from 'slices/styleSlice'
import useLocalStorage from './useLocalStorage'
import { useAppDispatch, useAppSelector } from './useReducerHook'

const useFullPage = () => {
  const { isFullPage } = useAppSelector((state) => state.styleSlice)
  const [, setLocalStorageIsFullPage] = useLocalStorage('isFullPage', isFullPage)
  const dispatch = useAppDispatch()

  const setFullPage = useCallback(
    (value: boolean) => {
      dispatch(setIsFullPage(value))
    },
    [dispatch]
  )

  const setLocalStorageFullPage = useCallback(
    (value: boolean) => {
      setLocalStorageIsFullPage(value)
      dispatch(setIsFullPage(value))
    },
    [setLocalStorageIsFullPage, dispatch]
  )

  return [isFullPage, setFullPage, setLocalStorageFullPage] as const
}

export default useFullPage
