import DoubleRightIcon from '@components/icons/DoubleRightIcon'
import React from 'react'
import { useAppSelector } from 'hooks/useReducerHook'
import { setStyleState } from 'slices/styleSlice'
import { useAppDispatch } from 'store/store'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  const { isFullPage } = useAppSelector((state) => state.styleSlice)
  const dispatch = useAppDispatch()

  const toggleFullPage = () => {
    dispatch(setStyleState({ isFullPage: !isFullPage }))
  }

  return (
    <header className="flex items-center p-1 w-full">
      <span className="p-2 hover:bg-gray-200 rounded-xl cursor-pointer">
        <DoubleRightIcon className="w-4 text-gray-400" strokeWidth={2} onClick={toggleFullPage} />
      </span>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
