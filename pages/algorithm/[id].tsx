import notion from 'service/NotionApi'
import NotionRenderer from '@components/organisms/NotionRenderer'
import { ExtendedRecordMap } from 'notion-types'
import Footer from '@components/organisms/Footer'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/useReducerHook'
import { setNavigation } from 'slices/styleSlice'

type Props = {
  title: string
  recordMap: ExtendedRecordMap
  nextId: { id: string; slug: string }
  prevId: { id: string; slug: string }
  parentName: string
  id: string
  error?: boolean
}

const Home = ({ recordMap, nextId, prevId, id, title, error, parentName }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      setNavigation([
        { href: '/algorithm', name: parentName },
        { href: id, name: title },
      ])
    )

    return () => {
      setNavigation([])
    }
  }, [dispatch, id, parentName, title])

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center font-semibold flex-col">
        <span>404: 잘못된 페이지 접근 입니다.</span>
        <Link href={'/algorithm'} className="p-2 bg-purple-400 text-white rounded-lg w-fit">
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
        <NotionRenderer recordMap={recordMap} className="w-full" bodyClassName="w-full" />
        <Footer next={nextId} prevoius={prevId} />
      </section>
      <section className="col-span-3"></section>
    </div>
  )
}

export default Home

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return {
      props: {
        error: true,
      },
    }
  }

  const result = await notion.getPageInfo({
    pageId: params.id,
  })!

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
      id: params.id,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  try {
    const response = await notion.getAllPosts()

    return {
      fallback: 'blocking',
      paths: response?.map((result) => {
        return { params: { id: result?.id } }
      }),
    }
  } catch (err) {
    return { paths: [{ params: { id: 'error' } }], fallback: false }
  }
}
