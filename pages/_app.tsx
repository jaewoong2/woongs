import useMounted from 'hooks/useMounted'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Provider } from 'react-redux'

import wrapper from 'store/store'
import Layout from '@components/templates/Layout'
import SEO from '@components/templates/SEO'

import '../styles/globals.css'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  const mounted = useMounted()

  return (
    mounted && (
      <Provider store={store}>
        <SEO />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  )
}

export default App
