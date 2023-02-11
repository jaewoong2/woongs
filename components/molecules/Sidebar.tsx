import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import RightIcon from '@components/icons/RightIcon'
import useFullPage from 'hooks/useFullPage'
import useIsMobile from 'hooks/useIsMobile'
import useDebouncedMouseMove from 'hooks/useMouseMove'
import useDrawer from 'hooks/useDrawer'

const Sidebar = () => {
  const drawer = useDrawer(false)
  const [isFullPage] = useFullPage()
  const [isMobile] = useIsMobile()

  const navStyle = useMemo(
    () =>
      !isFullPage
        ? drawer
          ? 'fixed h-[80%] py-8 shadow-xl rounded-xl top-12 ease-in-out duration-500 opacity-100 translate-x-0 drop-shadow-xl'
          : 'fixed h-[80%] py-8 shadow-xl rounded-xl top-12 ease-in-out duration-500 -translate-x-full opacity-0'
        : 'fixed h-full',
    [isFullPage, drawer]
  )

  return !isMobile ? (
    <nav className={`w-52 bg-stone-50 ${navStyle} z-20`}>
      <div className="flex flex-col items-center w-full pt-10">
        <Image
          priority={true}
          src={'/me.jpeg'}
          width="96"
          height="96"
          className="rounded-full w-24 mx-auto"
          alt="LIM JAE WOONG"
        />
        <h6 className="p-3 text-xl font-semibold">재룽지</h6>
        <ul className="w-full">
          <Link className="text-sm hover:bg-gray-100 w-full p-2 flex" href={'/'}>
            <RightIcon className="w-3 mr-2" strokeWidth={3} />
            {`🏠 home`}
          </Link>
          <Link className="text-sm hover:bg-gray-100 w-full p-2 flex" href={'/posts'}>
            <RightIcon className="w-3 mr-2" strokeWidth={3} />
            {`🥳 blog`}
          </Link>
          <Link className="text-sm hover:bg-gray-100 w-full p-2 flex" href={'/about'}>
            <RightIcon className="w-3 mr-2" strokeWidth={3} />
            {`🤔 me?`}
          </Link>
        </ul>
      </div>
    </nav>
  ) : null
}

export default Sidebar
