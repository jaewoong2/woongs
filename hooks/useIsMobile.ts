import { useCallback, useEffect } from 'react'
import { setIsMobile } from 'slices/styleSlice'
import useDebouncedCallback from './useDebouncedCallback'
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
  const handleWindowWdith = useCallback(() => {
    if (window.innerWidth <= 640) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [setMobile])

  const debounceResize = useDebouncedCallback(handleWindowWdith)

  useEffect(() => {
    window.addEventListener('resize', debounceResize)
    return () => {
      window.removeEventListener('resize', debounceResize)
    }
  }, [debounceResize])

  useEffect(() => {
    handleWindowWdith()
  }, [handleWindowWdith])

  return [isMobile, setMobile] as const
}

export default useIsMobile
