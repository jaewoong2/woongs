import { ArticleJsonLdProps, NextSeoProps, OpenGraph, OpenGraphImage } from 'types/seo'

export const DEFAULT_OPEN_GRAPH_IMAGE: OpenGraphImage = {
  url: 'https://woongs.vercel.app/_next/image?url=%2Fme.jpeg&w=256&q=75',
  width: 256,
  height: 256,
  alt: 'Woongs Wrold',
}

export const DEFAULT_OPEN_GRAPH: OpenGraph = {
  type: 'article',
  article: {
    publishedTime: '2022-06-21T23:04:13Z',
    modifiedTime: '2022-01-21T18:04:43Z',
    authors: ['@Jaewoong2'],
    tags: ['프론트엔드', '자바스크립트', '리엑트', '타입스크립트', '알고리즘'],
  },
  url: 'https://woongs.vercel.app/',
  images: [DEFAULT_OPEN_GRAPH_IMAGE],
  site_name: '누룽지 사이트, “재룽지”',
}

export const DEFAULT_NEXT_SEO_PROPS: NextSeoProps = {
  title: '누룽지 사이트, “재룽지”',
  description:
    '자바스크립트 / 타입스크립트 / 리엑트 / 알고리즘 등을 꾹꾹 눌러 누룽지 처럼 작성해 놓은 기술 블로그',
  canonical: 'https://woongs.vercel.app/',
  openGraph: DEFAULT_OPEN_GRAPH,
  additionalMetaTags: [
    {
      name: 'keywords',
      content: '자바스크립트, 타입스크립트, 리엑트, 알고리즘',
    },
  ],
}

export const DEFAULT_ARTICLE_JSON_LD_PROPS: ArticleJsonLdProps = {
  type: 'BlogPosting',
  url: 'https://woongs.vercel.app',
  title: '누룽지 사이트, “재룽지”',
  images: ['https://woongs.vercel.app/_next/image?url=%2Fme.jpeg&w=256&q=75'],
  datePublished: '',
  dateModified: '',
  authorName: '@Jaewoong2',
  description:
    '자바스크립트 / 타입스크립트 / 리엑트 / 알고리즘 등을 꾹꾹 눌러 누룽지 처럼 작성해 놓은 기술 블로그',
}
