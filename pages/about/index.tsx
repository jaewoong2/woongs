import NotionRenderer from '@components/organisms/NotionRenderer'
import { GetStaticProps } from 'next'
import { ExtendedRecordMap } from 'notion-types'
import notion from 'service/NotionApi'

type Props = {
  id: string
  recordMap: ExtendedRecordMap
}

const Home = ({ id, recordMap }: Props) => {
  return (
    <div className="bg-white w-full h-full flex">
      <div className="px-6 grid grid-cols-12 w-full">
        <section className="col-span-3"></section>
        <section className="w-full col-span-full">
          <NotionRenderer recordMap={recordMap} id={id} />
        </section>
        <section className="col-span-3"></section>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  if (!process.env.NOTION_ABOUT_KEY) {
    return {
      props: {},
    }
  }

  const response = await notion.getPage(process.env.NOTION_ABOUT_KEY)

  return {
    revalidate: 60 * 30,
    props: {
      recordMap: response,
    },
  }
}
