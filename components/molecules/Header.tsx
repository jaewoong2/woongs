import React, { useEffect, useState } from 'react'
import HambergerIcon from '@components/icons/HambergerIcon'
import { useRouter } from 'next/router'
import useFullPage from 'hooks/useFullPage'
import useIsMobile from 'hooks/useIsMobile'
import Link from 'next/link'
import SarchInput from '@components/organisms/SearchInput'

const Header = () => {
  const [isFullPage, , setLocalStorageIsFullPage] = useFullPage()
  const [isMobile] = useIsMobile()

  const router = useRouter()
  const [title, setTitle] = useState('')

  useEffect(() => {
    const $title = document.querySelector('.notion-title')
    setTitle($title?.innerHTML ?? '')
  }, [router.pathname])

  const toggleFullPage = () => {
    setLocalStorageIsFullPage(!isFullPage)
  }

  if (isMobile) {
    return (
      <>
        <nav className="w-full flex justify-center fixed top-0 z-10 bg-white">
          <Link className="text-sm hover:bg-gray-100 w-full p-2 flex justify-center" href={'/'}>
            {`🏠 home`}
          </Link>
          <Link
            className="text-sm hover:bg-gray-100 w-full p-2 flex justify-center"
            href={'/posts'}
          >
            {`🥳 blog`}
          </Link>
          <Link
            className="text-sm hover:bg-gray-100 w-full p-2 flex justify-center"
            href={'/about'}
          >
            {`🤔 me?`}
          </Link>
        </nav>
        <SarchInput />
      </>
    )
  }

  return (
    <header
      className={`flex items-center p-1 ${
        isFullPage ? 'w-[calc(100%-13rem)]' : 'w-full'
      } fixed top-0 bg-white z-10 justify-between`}
    >
      <div className="flex items-center">
        <div className="p-2 hover:bg-gray-200 cursor-pointer rounded-xl" onClick={toggleFullPage}>
          <HambergerIcon className="w-4 text-gray-400" strokeWidth={2} />
        </div>
        <h1 className="px-2">{title}</h1>
      </div>
      <SarchInput />
    </header>
  )
}

export default Header
