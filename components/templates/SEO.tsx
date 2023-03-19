import { useAppSelector } from 'hooks/useReducerHook'
import useSEO from 'hooks/useSEO'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import React from 'react'

const SEO = () => {
  const [seo] = useSEO()

  return (
    <>
      <Head>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <NextSeo {...seo} />
    </>
  )
}

export default SEO
