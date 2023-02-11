import Header from '@components/molecules/Header'
import Sidebar from '@components/molecules/Sidebar'
import useFullPage from 'hooks/useFullPage'
import useIsMobile from 'hooks/useIsMobile'
import React, { PropsWithChildren, useEffect } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const [isFullPage] = useFullPage()
  const [isMobile, setIsMobile] = useIsMobile()

  useEffect(() => {
    const listener = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [setIsMobile])

  return (
    <section className="w-full h-full flex">
      <Sidebar />
      <div
        className={`w-full ${
          !isMobile && isFullPage ? 'pl-52' : ''
        } relative h-full transition-all`}
      >
        <Header />
        {children}
      </div>
    </section>
  )
}

export default Layout
