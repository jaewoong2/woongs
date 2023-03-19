import React from 'react'
import { useAppSelector } from 'hooks/useReducerHook'
import { ArticleJsonLd } from 'next-seo'

const BlogSEO = () => {
  const seo = useAppSelector((state) => state.seoSlice)
  return <ArticleJsonLd {...seo.article} />
}

export default BlogSEO
