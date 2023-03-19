import SEO from '@components/templates/SEO'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="w-full h-full">
      <Head></Head>
      <body className="w-full h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
