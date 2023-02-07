import ArticleCard from '@components/molecules/ArticleCard'
import notion, { Item } from 'service/NotionApi'

type Props = {
  posts: Item[]
}

const Home = ({ posts }: Props) => {
  return (
    <div className={`bg-white font-sans w-full h-full flex`}>
      <main className="px-6 py-4 grid-cols-2 grid gap-x-20 gap-y-5">
        {posts.map((post) => (
          <ArticleCard
            key={post.post.id}
            title={post.slug}
            description="하이2"
            href={post.post.id}
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
