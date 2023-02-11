import ArticleCard from '@components/molecules/ArticleCard'
import useSearch from 'hooks/useSearch'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import notion, { Item } from 'service/NotionApi'
import { setTags, setPosts } from 'slices/postsSlice'
import wrapper from 'store/store'

type Props = {
  posts: Item[]
}

const Home = ({ posts }: Props) => {
  const router = useRouter()
  const { result, searchQuery } = useSearch()

  useEffect(() => {
    if (typeof router.query['q'] === 'string') {
      searchQuery(encodeURIComponent(router.query['q']))
    }
  }, [router])

  if (result && router.query['q']) {
    return (
      <div className="bg-white font-sans justify-center w-full flex py-20">
        <main className="px-5 grid min-h-full h-fit gap-5 justify-center xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {result.map((post) => (
            <ArticleCard
              key={post?.id}
              title={post?.title ?? ''}
              href={post?.id ?? ''}
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
        {posts?.map((post) => (
          <ArticleCard
            key={post.post.id}
            title={post.slug}
            href={post.post.id}
            thumbnail={post.thumbnail}
            createdTime={post.createdTime}
          />
        ))}
      </main>
    </div>
  )
}
export default Home

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const tags = await notion.getAllTags()
  const posts = await notion.getAllPosts()
  const response = await notion.getSlug()

  store.dispatch(setTags(tags!))
  store.dispatch(setPosts(posts!))

  if (!response) {
    return {
      props: {
        posts: [],
      },
    }
  }

  return { props: { posts: response.reverse() } }
})
