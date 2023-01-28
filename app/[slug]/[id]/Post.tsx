import React from 'react'
import ReactMarkDown from 'react-markdown'
import NotionApi from 'service/NotionApi'
import remarkGfm from 'remark-gfm'

type Props = {
  id: string
  slug: string
}

const Post = async ({ id }: Props) => {
  const { md } = await NotionApi.getPageMarkDown({ pageId: id })

  return <ReactMarkDown remarkPlugins={[remarkGfm]}>{md}</ReactMarkDown>
}

export default Post
