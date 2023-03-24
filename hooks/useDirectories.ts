import { useCallback, useEffect, useState } from 'react'

const useDirectories = () => {
  const [dirs, setDirs] = useState<string[]>([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const getDirectories = useCallback(async () => {
    setLoading(true)
    setError(false)

    try {
      const response = await fetch('/api/getDirectories', { method: 'GET' })

      if (!response.ok) {
        throw new Error(`Failed to fetch directories: ${response.status}`)
      }

      const directories = await response.json()
      setDirs(directories)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getDirectories()
  }, [])

  return { dirs, isLoading, isError }
}

export default useDirectories
