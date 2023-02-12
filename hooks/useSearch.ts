import React, { useCallback, useState } from 'react'
import { useAppSelector } from './useReducerHook'

type Post = {
  id: string
  title: string
  tags: string[]
  thumbnail: string
  createdTime: string
} | null

const useSearch = () => {
  const { posts } = useAppSelector((state) => state.postsSlice)
  const [search, setSearch] = useState('')
  const [result, setResult] = useState<Post[]>()

  const searchQuery = useCallback(
    (q: string) => {
      const post = posts.filter((post) => {
        const hasSameTag = post!.tags.find((tag) => tag === decodeURIComponent(q))
        if (hasSameTag) {
          return true
        }
        return false
      })

      if (post) {
        setResult(post)
      }
    },
    [posts]
  )

  const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  return { search, result, handleChangeSearch, searchQuery }
}

export default useSearch
