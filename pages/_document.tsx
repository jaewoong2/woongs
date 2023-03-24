import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko" className="w-full h-full">
        <Head></Head>
        <body className="w-full h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
