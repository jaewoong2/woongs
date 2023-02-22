import NotionRenderer from '@components/organisms/NotionRenderer'
import { useAppDispatch } from 'hooks/useReducerHook'
import { useEffect } from 'react'
import notion from 'service/NotionApi'
import { setNavigation } from 'slices/styleSlice'

type Props = {
  recordMap: any
}

const Home = ({ recordMap }: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNavigation([{ href: 'algorithm', name: '알고리즘' }]))
  }, [dispatch])

  return (
    <div className="bg-white font-sans justify-center w-full flex py-20">
      <main className="w-full px-3">
        <NotionRenderer recordMap={recordMap} className="w-full" bodyClassName="w-full" />
      </main>
    </div>
  )
}
export default Home

export const getStaticProps = async () => {
  const tags = await notion.getAllTags()
  const posts = await notion.getAllPosts()

  const result = await notion.getPage(process.env.NOTION_ALGORITHM_KEY ?? '')

  return { props: { posts: posts?.reverse(), tags, recordMap: result } }
}
