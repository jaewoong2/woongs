import { useState } from 'react'

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
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
