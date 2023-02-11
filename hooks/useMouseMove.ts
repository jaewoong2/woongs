import { useState, useEffect } from 'react'

const useDebouncedMouseMove = (callback: (a: MouseEvent) => void, delay: number = 100) => {
  const [debouncing, setDebouncing] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (debouncing) return
      setDebouncing(true)
      callback(event)
      setTimeout(() => setDebouncing(false), delay)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [callback, delay, debouncing])
}

export default useDebouncedMouseMove
