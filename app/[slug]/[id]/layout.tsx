import 'dayjs/locale/ko'

import NotionApi from 'service/NotionApi'
import Navigation from '@components/sections/Navigation'
import MarkDownBody from '@components/sections/MarkDownBody'
import LeftSection from '@components/layout/LeftSection'
import TOC from '@components/layout/TOC'

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const { title, tags, createdAt } = await NotionApi.getPageInfo({ pageId: params.id })
  const { md } = await NotionApi.getPageMarkDown({ pageId: params.id })

  return (
    <html className="h-full w-full">
      <head />
      <body className="">
        <Navigation />
        <section className="grid grid-cols-12 gap-6 container mx-auto mt-8">
          <TOC variant="mobile">{md}</TOC>
          <LeftSection tags={tags} />
          <MarkDownBody createdAt={createdAt} title={title}>
            {children}
          </MarkDownBody>
          <TOC variant="desktop">{md}</TOC>
        </section>
      </body>
    </html>
  )
}
