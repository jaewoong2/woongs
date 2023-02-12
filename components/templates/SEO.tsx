import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

const DEFAULT_SEO: NextSeoProps = {
  title: '누룽지 같은 블로그, 재룽지',
  description: '누룽지 같은 블로그, 재룽지',
  canonical: 'https://www.carrotins.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '카카오톡, 페이스북에 링크 넣으면 연결되는 url',
    title: '카카오톡, 페이스북에 링크 넣으면 올라올 타이틀',
    site_name: '사이트이름',
    images: [
      {
        url: '카카오톡, 페이스북에에 링크 넣으면 올라올 이미지',
        width: 285,
        height: 167,
        alt: '이미지',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}

const SEO = (props: Partial<NextSeoProps>) => {
  return <NextSeo {...props} {...DEFAULT_SEO} />
}

export default SEO
