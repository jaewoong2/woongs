import DownIcon from '@components/icons/DownIcon'
import RightIcon from '@components/icons/RightIcon'
import useDirectories from 'hooks/useDirectories'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useIsMobile from '../../hooks/useIsMobile'

const Links = () => {
  const [isMobile] = useIsMobile()
  const [current, setCurrent] = useState('/')
  const router = useRouter()
  const { dirs } = useDirectories()

  useEffect(() => {
    setCurrent('/' + router.asPath.split('/')[1])
  }, [router])

  return (
    <>
      {dirs.map(([href, name]) => (
        <Link
          key={name}
          className={`text-sm hover:bg-gray-100 w-full p-2 flex ${
            isMobile ? 'justify-center items-center' : ''
          } ${current === href ? 'bg-blue-50' : ''}`}
          href={href}
        >
          {current === href ? (
            <DownIcon className="w-3 mr-2" strokeWidth={3} />
          ) : (
            <RightIcon className="w-3 mr-2" strokeWidth={3} />
          )}
          {name}
        </Link>
      ))}
    </>
  )
}

export default React.memo(Links)
