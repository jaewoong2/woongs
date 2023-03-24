import React, { useRef } from 'react'
import HambergerIcon from '@components/icons/HambergerIcon'
import useFullPage from 'hooks/useFullPage'
import useIsMobile from 'hooks/useIsMobile'
import { useAppSelector } from 'hooks/useReducerHook'
import Navigation from './Navigation'
import useHover from 'hooks/useHover'
import DoubleLeftIcon from '@components/icons/DoubleLeftIcon'

const Header = () => {
  const [isFullPage, , setLocalStorageIsFullPage] = useFullPage()
  const [isMobile] = useIsMobile()
  const { navigation } = useAppSelector((state) => state.styleSlice)

  const menuRef = useRef(null)
  const isMenuHover = useHover(menuRef)

  const toggleFullPage = () => {
    setLocalStorageIsFullPage(!isFullPage)
  }

  return !isMobile ? (
    <header
      className={`flex items-center  p-1 ${
        isFullPage ? 'w-[calc(100%-13rem)]' : 'w-full'
      } fixed top-0 bg-white z-10 justify-between`}
    >
      <div className="flex items-center">
        <div
          ref={menuRef}
          className="p-2 hover:bg-gray-200 cursor-pointer rounded-xl transition-opacity"
          onClick={toggleFullPage}
        >
          {isMenuHover ? (
            <DoubleLeftIcon className="w-4  text-gray-900" strokeWidth={2} />
          ) : (
            <HambergerIcon className="w-4 text-gray-400" strokeWidth={2} />
          )}
        </div>
        <Navigation navigation={navigation} />
      </div>
    </header>
  ) : null
}

export default Header
