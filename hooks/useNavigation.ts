import { useEffect, useState } from 'react'
import { setNavigation } from 'slices/styleSlice'
import { useAppDispatch } from './useReducerHook'

type Navigtaion = {
  href: string
  name: string
}

const useNavigation = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<Navigtaion[]>([])
  const dispatch = useAppDispatch()

  const addNavigation = (breadCrumb: Navigtaion) => {
    setBreadCrumbs((prev) => [...prev, breadCrumb])
  }

  const reset = () => {
    setBreadCrumbs(() => [])
  }

  useEffect(() => {
    dispatch(setNavigation(breadCrumbs))

    return () => {
      reset()
    }
  }, [dispatch, breadCrumbs])

  return {
    addNavigation,
    reset,
  }
}

export default useNavigation
