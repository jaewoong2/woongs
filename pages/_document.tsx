import Layout from '@components/templates/Layout'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="w-full h-full">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="w-full h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
