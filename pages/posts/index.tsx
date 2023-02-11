import ArticleCard from '@components/molecules/ArticleCard'
import notion, { Item } from 'service/NotionApi'

type Props = {
  posts: Item[]
}

const Home = ({ posts }: Props) => {
  return (
    <div className="bg-white font-sans justify-center w-full flex">
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

export const getStaticProps = async () => {
  const response = await notion.getSlug()

  if (!response) {
    return { props: {} }
  }

  return { props: { posts: response.reverse() } }
}
