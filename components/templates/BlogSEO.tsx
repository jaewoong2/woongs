import React from 'react'
import { NewsArticleJsonLd, NewsArticleJsonLdProps } from 'next-seo'

type Props = NewsArticleJsonLdProps

const DEFAULT_SEO: NewsArticleJsonLdProps = {
  title: '누룽지 같은 블로그, 재룽지',
  description: '누룽지 같은 블로그, 재룽지',
  url: '',
  images: [],
  section: '',
  keywords: '',
  dateCreated: '',
  authorName: '@Jaewoong2',
  body: '',
  publisherName: '@Jaewoong2',
  publisherLogo: '로고',
  datePublished: '',
}

const BlogSEO = ({ ...props }: Partial<Props>) => {
  const seo: NewsArticleJsonLdProps = {
    url: props.url ?? DEFAULT_SEO.url,
    title: props.title ?? DEFAULT_SEO.title,
    images: props.images ?? DEFAULT_SEO.images,
    section: props.section ?? DEFAULT_SEO.section,
    keywords: props.keywords ?? DEFAULT_SEO.keywords,
    dateCreated: props.dateCreated ?? DEFAULT_SEO.dateCreated,
    datePublished: props.datePublished ?? DEFAULT_SEO.datePublished,
    authorName: props.authorName ?? DEFAULT_SEO.authorName,
    description: props.description ?? DEFAULT_SEO.description,
    body: props.body ?? DEFAULT_SEO.body,
    publisherName: props.publisherName ?? DEFAULT_SEO.publisherName,
    publisherLogo: props.publisherLogo ?? DEFAULT_SEO.publisherLogo,
  }

  return <NewsArticleJsonLd {...seo} />
}

export default BlogSEO
