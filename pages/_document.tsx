import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="w-full h-full">
      <Head />
      <body className="w-full h-full">
        <div className="w-full h-full flex">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
