import { useCallback, useEffect, useState } from 'react'
import { setNavigation } from 'slices/styleSlice'
import { useAppDispatch } from './useReducerHook'

type Navigtaion = {
  href: string
  name: string
}

const useNavigation = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<Navigtaion[]>([])
  const dispatch = useAppDispatch()

  const addNavigation = useCallback((breadCrumb: Navigtaion | Navigtaion[]) => {
    if ('length' in breadCrumb) {
      setBreadCrumbs((prev) => [...prev, ...breadCrumb])
    } else {
      setBreadCrumbs((prev) => [...prev, breadCrumb])
    }
  }, [])

  const reset = useCallback(() => {
    dispatch(setNavigation([]))
  }, [])

  useEffect(() => {
    reset()
    return () => {
      reset()
    }
  }, [reset, dispatch])

  useEffect(() => {
    dispatch(setNavigation(breadCrumbs))
  }, [breadCrumbs])

  return {
    setBreadCrumbs,
    addNavigation,
    reset,
  }
}

export default useNavigation
