import useMounted from 'hooks/useMounted'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import wrapper from 'store/store'
import Layout from '@components/templates/Layout'
import SEO from '@components/templates/SEO'

import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import '../styles/globals.css'

import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import { useEffect } from 'react'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  const mounted = useMounted()

  useEffect(() => {
    Prism?.highlightAll()
  }, [])

  return (
    mounted && (
      <>
        <Provider store={store}>
          <SEO />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    )
  )
}

export default App
