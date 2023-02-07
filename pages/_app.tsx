import Header from '@components/molecules/Header'
import Sidebar from '@components/molecules/Sidebar'
import { useAppSelector } from 'hooks/useReducerHook'
import { AppProps } from 'next/app'
import wrapper from 'store/store'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const { isFullPage } = useAppSelector((state) => state.styleSlice)

  return (
    <section className="w-full h-full flex">
      <Sidebar />
      <Header title="Home" />
      <div className={`w-full h-full ${isFullPage ? 'flex' : ''}`}>
        <Component {...pageProps} />
      </div>
    </section>
  )
}

export default wrapper.withRedux(App)
