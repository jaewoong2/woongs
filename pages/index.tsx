import { ExtendedRecordMap } from 'notion-types'
import notion from 'service/NotionApi'
import NotionRenderer from '@components/organisms/NotionRenderer'
import wrapper from 'store/store'
import { setTags } from 'slices/postsSlice'

type Props = {
  recordMap: ExtendedRecordMap
}

const Home = ({ recordMap }: Props) => {
  return (
    <div className="bg-white w-full h-full flex">
      <div className="px-6 grid grid-cols-12 w-full">
        <section className="col-span-3"></section>
        <section className="w-full xl:col-span-6 col-span-full">
          <NotionRenderer recordMap={recordMap} />
        </section>
        <section className="col-span-3"></section>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const response = await notion.getPage(process.env.NOTION_HOME_KEY!)

  if (!store.getState().postsSlice.tags) {
    const tagsMap = await notion.getTagsMap()
    store.dispatch(setTags(tagsMap))
  }

  return {
    revalidate: 60 * 10,
    props: {
      recordMap: response,
    },
  }
})
