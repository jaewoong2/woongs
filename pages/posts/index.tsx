import ArticleCard from '@components/molecules/ArticleCard'
import Layout from '@components/templates/Layout'
import useSearch from 'hooks/useSearch'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import notion, { Item } from 'service/NotionApi'
import { setTags, setPosts } from 'slices/postsSlice'
import wrapper from 'store/store'

type Props = {
  posts:
    | {
        title: string
        tags: string[]
        id: string
        thumbnail: string
        createdTime: string
      }[]
    | null[]

  tags: string[][] | null
}

const Home = ({ posts, tags }: Props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { result, searchQuery } = useSearch()

  useEffect(() => {
    if (tags && posts) {
      dispatch(setTags(tags))
      dispatch(setPosts(posts))
    }
  }, [dispatch, tags, posts])

  useEffect(() => {
    if (typeof router.query['q'] === 'string') {
      searchQuery(encodeURIComponent(router.query['q']))
    }
  }, [router, searchQuery])

  if (result && router.query['q']) {
    return (
      <div className="bg-white font-sans justify-center w-full flex py-20">
        <main className="px-5 grid min-h-full h-fit gap-5 justify-center xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {result.map((post) => (
            <ArticleCard
              key={post?.id}
              title={post?.title ?? ''}
              href={'/posts/' + post?.title ?? ''}
              thumbnail={post?.thumbnail ?? ''}
              createdTime={post?.createdTime ?? ''}
            />
          ))}
        </main>
      </div>
    )
  }

  return (
    <div className="bg-white font-sans justify-center w-full flex py-20">
      <main className="px-5 grid min-h-full h-fit gap-5 justify-center xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {posts?.map(
          (post) =>
            post && (
              <ArticleCard
                key={post.id}
                title={post.title ?? ''}
                href={'/posts/' + post?.title ?? ''}
                thumbnail={post.thumbnail ?? ''}
                createdTime={post.createdTime ?? ''}
              />
            )
        )}
      </main>
    </div>
  )
}
export default Home

export const getStaticProps = async () => {
  const tags = await notion.getAllTags()
  const posts = await notion.getAllPosts()

  return { props: { posts: posts?.reverse(), tags } }
}
