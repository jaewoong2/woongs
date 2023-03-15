import RightIcon from '@components/icons/RightIcon'
import Link from 'next/link'
import React from 'react'
import useIsMobile from '../../hooks/useIsMobile'

const Links = () => {
  const [isMobile] = useIsMobile()

  return (
    <>
      <Link
        className={`text-sm hover:bg-gray-100 w-full p-2 flex ${isMobile ? 'justify-center' : ''}`}
        href={'/'}
      >
        <RightIcon className="w-3 mr-2" strokeWidth={3} />
        {`🏠 home`}
      </Link>
      <Link
        className={`text-sm hover:bg-gray-100 w-full p-2 flex ${isMobile ? 'justify-center' : ''}`}
        href={'/algorithm'}
      >
        <RightIcon className="w-3 mr-2" strokeWidth={3} />
        {`🥳 algorithm`}
      </Link>
      <Link
        className={`text-sm hover:bg-gray-100 w-full p-2 flex ${isMobile ? 'justify-center' : ''}`}
        href={'/about'}
      >
        <RightIcon className="w-3 mr-2" strokeWidth={3} />
        {`🤔 me?`}
      </Link>
    </>
  )
}

export default Links
