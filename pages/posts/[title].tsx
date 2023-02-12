import notion from 'service/NotionApi'
import NotionRenderer from '@components/organisms/NotionRenderer'
import { ExtendedRecordMap } from 'notion-types'
import Footer from '@components/organisms/Footer'
import Layout from '@components/templates/Layout'
import BlogSEO from '@components/templates/BlogSEO'

type Props = {
  title: string
  id: string
  recordMap: ExtendedRecordMap
  nextId: { id: string; slug: string }
  prevId: { id: string; slug: string }
}

const Home = ({ recordMap, id, nextId, prevId }: Props) => {
  return (
    <>
      <BlogSEO />
      <div className="xl:px-6 grid grid-cols-12 px-1">
        <section className="col-span-3"></section>
        <section className="w-full xl:col-span-6 col-span-full">
          <NotionRenderer recordMap={recordMap} id={id} />
          <Footer next={nextId} prevoius={prevId} />
        </section>
        <section className="col-span-3"></section>
      </div>
    </>
  )
}

export default Home

export const getStaticProps = async ({ params }: { params: { title: string } }) => {
  const response = await notion.getAllPosts()
  const pageId = response?.find((post) => post?.title === params.title)?.id
  const result = await notion.getPageInfo({
    pageId: pageId ?? '',
  })

  return {
    props: {
      ...result,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const response = await notion.getAllPosts()

  if (!response) {
    return {
      fallback: false,
      paths: ['error'].map((result) => {
        return {
          params: {
            title: result,
          },
        }
      }),
    }
  }

  return {
    fallback: false,
    paths: response.map((result) => {
      if (result) {
        return {
          params: {
            title: result.title ?? '',
          },
        }
      }
    }),
  }
}
