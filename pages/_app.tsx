import useMounted from 'hooks/useMounted'
import { AppContext, AppProps } from 'next/app'
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
import notion from 'service/NotionApi'

require('prismjs/components/prism-python')

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  const { pageProps } = props
  const mounted = useMounted()

  useEffect(() => {
    Prism?.highlightAll()
  }, [])

  return (
    mounted && (
      <Provider store={store}>
        <Layout>
          <SEO />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  )
}

export default MyApp
