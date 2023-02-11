import { useState } from 'react'
import useMounted from './useMounted'

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const mounted = useMounted()
  const [value, setValue] = useState<T>(() => {
    if (!mounted) {
      return initialValue
    }

    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue)
        return parsedValue as T
      } catch {
        return initialValue
      }
    }
    return initialValue
  })

  const setAndStoreValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setAndStoreValue] as const
}

export default useLocalStorage
