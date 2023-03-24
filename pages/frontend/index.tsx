import NotionRenderer from '@components/organisms/NotionRenderer'
import useNavigation from 'hooks/useNavigation'
import { useEffect } from 'react'
import notion from 'service/NotionApi'
import { setTags } from 'slices/postsSlice'
import wrapper from 'store/store'

type Props = {
  recordMap: any
}

const Home = ({ recordMap }: Props) => {
  const { setBreadCrumbs } = useNavigation()

  useEffect(() => {
    setBreadCrumbs([{ href: 'frontend', name: '프론트엔드' }])
  }, [setBreadCrumbs])

  return (
    <div className="bg-white font-sans justify-center w-full flex py-20">
      <main className="w-full px-3">
        <NotionRenderer recordMap={recordMap} className="w-full" bodyClassName="w-full" />
      </main>
    </div>
  )
}
export default Home

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const tags = await notion.getAllTags()
  const posts = await notion.getAllPosts()
  const result = await notion.getPage(process.env.NOTION_FRONTEND ?? '')

  if (!store.getState().postsSlice.tags) {
    const tagsMap = await notion.getTagsMap()
    store.dispatch(setTags(tagsMap))
  }

  return { props: { posts: posts?.reverse(), tags, recordMap: result } }
})
