import NotionApi from 'service/NotionApi'

export default async function Head({ params: { id } }: { params: { slug: string; id: string } }) {
  const { title } = await NotionApi.getPageInfo({ pageId: id })

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
