import Header from '@components/molecules/Header'
import Sidebar from '@components/molecules/Sidebar'
import { useAppSelector } from 'hooks/useReducerHook'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const { isFullPage } = useAppSelector((state) => state.styleSlice)

  return (
    <section className="w-full h-full flex">
      <Sidebar />
      <div className={`w-full ${isFullPage ? 'pl-52' : ''}  h-full transition-all`}>
        <Header />
        {children}
      </div>
    </section>
  )
}

export default Layout
