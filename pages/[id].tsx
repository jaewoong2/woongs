import notion from 'service/NotionApi'
import NotionRenderer from '@components/organisms/NotionRenderer'
import { ExtendedRecordMap } from 'notion-types'
import Footer from '@components/organisms/Footer'
import Layout from '@components/templates/Layout'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  title: string
  id: string
  recordMap: ExtendedRecordMap
  nextId: { id: string; slug: string }
  prevId: { id: string; slug: string }

  error?: boolean
}

const Home = ({ recordMap, id, nextId, prevId, error }: Props) => {
  const router = useRouter()

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center font-semibold flex-col">
        <span>404: 잘못된 페이지 접근 입니다.</span>
        <Link href={'/posts'} className="p-2 bg-purple-400 text-white rounded-lg w-fit">
          목록
        </Link>
      </div>
    )
  }

  if (router.isFallback) {
    return (
      <div className="bg-white w-full h-full flex justify-center items-center flex-col gap-2">
        <span className="text-sm font-semibold text-violet-400 animate-pulse">누룽지 굽는중</span>
        <div className="flex items-center justify-center space-x-2 w-fit h-fit">
          <div className="w-2 h-2 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-2 h-2 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-2 h-2 rounded-full animate-pulse bg-violet-400"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="xl:px-6 grid grid-cols-12 px-1">
      <section className="col-span-3"></section>
      <section className="w-full xl:col-span-6 col-span-full">
        <NotionRenderer recordMap={recordMap} id={id} />
        <Footer next={nextId} prevoius={prevId} />
      </section>
      <section className="col-span-3"></section>
    </div>
  )
}

export default Home

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const result = await notion.getPageInfo({
    pageId: params.id,
  })

  if (!result) {
    return {
      props: {
        error: true,
      },
    }
  }

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
            id: result,
          },
        }
      }),
    }
  }

  return {
    fallback: true,
    paths: response?.map((result) => {
      return { params: { id: result?.id } }
    }),
  }
}
