import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/useReducerHook'
import { setStyleState } from 'slices/styleSlice'
import HambergerIcon from '@components/icons/HambergerIcon'
import { useRouter } from 'next/router'

const Header = () => {
  const { isFullPage } = useAppSelector((state) => state.styleSlice)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [title, setTitle] = useState('')

  useEffect(() => {
    const $title = document.querySelector('.notion-title')
    setTitle($title?.innerHTML ?? '')
  }, [router.pathname])

  const toggleFullPage = () => {
    dispatch(setStyleState({ isFullPage: !isFullPage }))
  }

  const headerStyle = 'flex items-center p-1 w-full top-0 sticky bg-white z-10'

  return (
    <header className={headerStyle}>
      <span className="p-2 hover:bg-gray-200 rounded-xl cursor-pointer" onClick={toggleFullPage}>
        <HambergerIcon className="w-4 text-gray-400" strokeWidth={2} />
      </span>
      <h1 className="px-2">{title}</h1>
    </header>
  )
}

export default Header
