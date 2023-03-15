import { useCallback, useRef } from 'react'

function useDebouncedCallback(callback: Function, delay: number = 250) {
  const timeout = useRef<any>()
  return useCallback(
    (...args: unknown[]) => {
      const later = () => {
        clearTimeout(timeout.current)
        callback(...args)
      }

      clearTimeout(timeout.current)
      timeout.current = setTimeout(later, delay)
    },
    [callback, delay]
  )
}

export default useDebouncedCallback
