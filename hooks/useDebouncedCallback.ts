import { useState, useEffect, useRef } from 'react'

const useDebouncedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  wait = 100
): [T, () => void] => {
  const [debouncedCallback, setDebouncedCallback] = useState<T>(callback)
  const timeoutId = useRef<number | undefined>(undefined)

  useEffect(() => {
    const debounced = (...args: Parameters<T>): void => {
      clearTimeout(timeoutId.current)

      timeoutId.current = window.setTimeout(() => {
        callback(...args)
      }, wait)
    }

    setDebouncedCallback(debounced as T)

    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [callback, wait])

  return [debouncedCallback, () => clearTimeout(timeoutId.current)]
}

export default useDebouncedCallback
