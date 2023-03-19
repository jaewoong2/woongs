import { useAppDispatch, useAppSelector } from './useReducerHook'
import { SEO, setSEO as setSliceSEO } from 'slices/seoSlice'

const useSEO = () => {
  const seo = useAppSelector((state) => state.seoSlice)
  const dispatch = useAppDispatch()

  const setSEO = (payload: Partial<SEO>) => {
    dispatch(
      setSliceSEO({
        ...payload,
        title: '나만의 누룽지 사이트 “재룽지” | ' + payload.title,
      })
    )
  }

  return [seo, setSEO] as const
}

export default useSEO