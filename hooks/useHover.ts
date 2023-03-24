import { RefObject, useCallback, useEffect, useState } from 'react'

const sleep = (ms: number = 100) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })

function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = useCallback(async () => {
    await sleep()
    setValue(true)
  }, [])

  const handleMouseLeave = useCallback(async () => {
    await sleep()
    setValue(false)
  }, [])

  useEffect(() => {
    const element = elementRef.current
    element?.addEventListener('mouseenter', handleMouseEnter)
    element?.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      element?.removeEventListener('mouseenter', handleMouseEnter)
      element?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementRef, handleMouseEnter, handleMouseLeave])

  return value
}

export default useHover
