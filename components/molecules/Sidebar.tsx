import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import RightIcon from '@components/icons/RightIcon'
import { useAppSelector } from 'hooks/useReducerHook'

const Sidebar = () => {
  const [drawer, setDrawer] = useState(false)
  const { isFullPage } = useAppSelector((state) => state.styleSlice)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      if (e.screenX < 208) {
        setDrawer(true)
      } else {
        setDrawer(false)
      }
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const navStyle = useMemo(
    () =>
      !isFullPage
        ? drawer
          ? 'fixed h-[80%] py-8 shadow-xl rounded-xl top-12 translate-x-0 ease-in-out duration-300 opacity-100 drop-shadow-xl'
          : 'fixed h-[80%] py-8 shadow-xl rounded-xl top-12 ease-in-out duration-300 -translate-x-full opacity-0'
        : 'fixed h-full',
    [isFullPage, drawer]
  )

  return (
    <nav className={`w-52 bg-stone-50 ${navStyle} z-20`}>
      <div className="flex flex-col items-center w-full pt-10">
        <Image
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
  )
}

export default Sidebar
