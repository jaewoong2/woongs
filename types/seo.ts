export interface OpenGraphImage {
  url: string
  width: number
  height: number
  alt: string
}

export interface OpenGraph {
  type: string
  article: {
    publishedTime: string
    modifiedTime: string
    authors: string[]
    tags: string[]
  }
  url: string
  images: OpenGraphImage[]
  site_name: string
}

export interface ArticleJsonLdProps {
  type: 'Article' | 'BlogPosting' | 'NewsArticle' | 'Blog'
  url: string
  title: string
  images: string[]
  datePublished: string
  dateModified: string
  authorName: string
  description: string
}

export interface NextSeoProps {
  title: string
  description: string
  canonical: string
  openGraph: OpenGraph
  additionalMetaTags: { name: string; content: string }[]
}
