import SearchIcon from '@components/icons/SearchIcon'
import useIsMobile from 'hooks/useIsMobile'
import useSearch from 'hooks/useSearch'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'

const SarchInput = () => {
  const [isMobile] = useIsMobile()
  const [isShowInput, setIsShowInput] = useState(false)
  const { search, handleChangeSearch } = useSearch()
  const router = useRouter()

  const toggleIsShowInput = useCallback(() => {
    setIsShowInput((prev) => !prev)
  }, [])

  const submitSearchQuery = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.replace('/posts?q=' + search)
    },
    [search, router]
  )

  if (isMobile) {
    return (
      <div className="fixed right-2 bottom-2 z-20">
        <button
          className="border p-1 rounded-xl hover:bg-gray-200 cursor-pointer"
          onClick={toggleIsShowInput}
        >
          <SearchIcon className="w-5 h-5" />
        </button>
        {isShowInput && (
          <form
            className="absolute right-0 bottom-[calc(100%+5px)] flex bg-white border shadow-md rounded-xl"
            onSubmit={submitSearchQuery}
          >
            <input
              className="text-xs px-3 rounded-xl"
              placeholder="Search Tags..."
              value={search}
            />
            <button className="px-3 bg-blue-500 rounded-xl text-white text-xs whitespace-nowrap py-3">
              검색
            </button>
          </form>
        )}
      </div>
    )
  }

  return (
    <div className="relative mr-5">
      <button
        className="border p-1 rounded-xl hover:bg-gray-200 cursor-pointer"
        onClick={toggleIsShowInput}
      >
        <SearchIcon className="w-5 h-5" />
      </button>
      {isShowInput && (
        <form
          className="absolute right-0 top-[calc(100%+5px)] flex bg-white border shadow-md rounded-xl"
          onSubmit={submitSearchQuery}
        >
          <input
            className="text-xs px-3 rounded-xl"
            placeholder="Search Tags..."
            onChange={handleChangeSearch}
            value={search}
          />
          <button className="px-3 bg-blue-500 rounded-xl text-white text-xs whitespace-nowrap py-3">
            검색
          </button>
        </form>
      )}
    </div>
  )
}

export default SarchInput
