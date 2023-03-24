import Header from '@components/molecules/Header'
import Sidebar from '@components/molecules/Sidebar'
import useFullPage from 'hooks/useFullPage'
import useIsMobile from 'hooks/useIsMobile'
import React, { PropsWithChildren, useEffect, useState } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const [isFullPage] = useFullPage()
  const [isMobile] = useIsMobile()

  return (
    <section className="w-full h-full flex">
      <Sidebar />
      <div
        className={`w-full ${
          !isMobile && isFullPage ? 'ml-52' : ''
        } relative h-full transition-all`}
      >
        <Header />
        {children}
      </div>
    </section>
  )
}

export default React.memo(Layout)
