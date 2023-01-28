import React from 'react'
import NotionApi from 'service/NotionApi'
import Post from './Post'

const Home = ({ params }: { params: { slug: string; id: string } }) => {
  // @ts-ignore
  return <Post {...params} />
}

export default Home

export const generateStaticParams = async () => {
  const response = await NotionApi.getItem()

  const result = response?.results
    .map((result: any) => result?.properties['이름']?.title.map((t: any) => t.plain_text))
    .map((v: string) => ({ slug: v[0] ?? 'null' }))

  return response?.results
    .map((result: any) => result.id)
    .map((id: any, index: number) => {
      return {
        slug: result[index].slug,
        id,
      }
    })
}
