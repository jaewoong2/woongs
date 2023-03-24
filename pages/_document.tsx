import { getDirectories } from '@utils/index'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const fnc = async () => {
    const directores = await getDirectories()
    console.log(directores)
  }
  fnc()

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
