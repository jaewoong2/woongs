import React from 'react'
import HambergerIcon from '@components/icons/HambergerIcon'
import { useRouter } from 'next/router'
import useFullPage from 'hooks/useFullPage'
import useIsMobile from 'hooks/useIsMobile'
import Link from 'next/link'
import SarchInput from '@components/organisms/SearchInput'
import { useAppSelector } from 'hooks/useReducerHook'
import Navigation from './Navigation'
import Links from './Links'

const Header = () => {
  const [isFullPage, , setLocalStorageIsFullPage] = useFullPage()
  const [isMobile] = useIsMobile()
  const { navigation } = useAppSelector((state) => state.styleSlice)

  const toggleFullPage = () => {
    setLocalStorageIsFullPage(!isFullPage)
  }

  return !isMobile ? (
    <header
      className={`flex items-center p-1 ${
        isFullPage ? 'w-[calc(100%-13rem)]' : 'w-full'
      } fixed top-0 bg-white z-10 justify-between`}
    >
      <div className="flex items-center">
        <div className="p-2 hover:bg-gray-200 cursor-pointer rounded-xl" onClick={toggleFullPage}>
          <HambergerIcon className="w-4 text-gray-400" strokeWidth={2} />
        </div>
        <Navigation navigation={navigation} />
      </div>
    </header>
  ) : null
}

export default Header
