import notion from 'service/NotionApi'
import NotionRenderer from '@components/organisms/NotionRenderer'
import { ExtendedRecordMap } from 'notion-types'
import Footer from '@components/organisms/Footer'

type Props = {
  title: string
  id: string
  recordMap: ExtendedRecordMap
  nextId: { id: string; slug: string }
  prevId: { id: string; slug: string }
}

const Home = ({ recordMap, id, nextId, prevId }: Props) => {
  return (
    <div className="px-6 grid grid-cols-12">
      <section className="col-span-3"></section>
      <section className="w-full md:col-span-6 col-span-full">
        <NotionRenderer recordMap={recordMap} id={id} />
        <Footer next={nextId} prevoius={prevId} />
      </section>
      <section className="col-span-3"></section>
    </div>
  )
}

export default Home

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const response1 = await notion.getPageInfo({ pageId: params.id })

  return {
    props: {
      ...response1,
    },
  }
}

export const getStaticPaths = async () => {
  const response = await notion.getSlug()

  return {
    fallback: false,
    paths: response?.map((result) => {
      if (result) {
        return {
          params: {
            id: result.post.id,
          },
        }
      }
    }),
  }
}
