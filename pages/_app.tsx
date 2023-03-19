import useMounted from 'hooks/useMounted'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import wrapper from 'store/store'
import Layout from '@components/templates/Layout'

import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import '../styles/globals.css'

import Prism from 'prismjs'
import { useEffect } from 'react'
import SEO from '@components/templates/SEO'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  const mounted = useMounted()

  useEffect(() => {
    if (Prism) {
      Prism?.highlightAll()
    }
  }, [])

  return (
    mounted && (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  )
}

export default App
