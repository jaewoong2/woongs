import NotionApi from 'service/NotionApi'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import RocketIcon from '@components/icons/RocketIcon'
import Image from 'next/image'
import Link from 'next/link'
import Toc from 'react-toc'

import TagIcon from '@components/icons/TagIcon'
dayjs.locale('ko')

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
      <body className="w-full h-full bg-[#22272e]">
        <nav className="text-white text-[0.9em] flex w-full shadow-xl container mx-auto pt-2 pb-5">
          <ul className="flex justify-between w-full">
            <li>
              <Link href={'/'}>Woongs World</Link>
            </li>
            <li>
              <Link href={'/me'}>About & Contact</Link>
            </li>
          </ul>
        </nav>

        <section className="grid grid-cols-12 gap-6 container mx-auto mt-8">
          <section className="col-span-2 rounded-xl border-[#444c56] border h-fit p-5">
            <h4 className="flex items-center mb-4 gap-2">
              Tags
              <TagIcon className="w-5 h-5" />
            </h4>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <code key={tag.id} className={`font-medium text-xs bg-[#2d333b] p-2 rounded-lg`}>
                  {tag.name}
                </code>
              ))}
            </div>
          </section>

          <main className="h-full flex flex-col container gap-5 items-center w-full mx-auto col-span-8">
            <div className="text-[#adbac7] rounded-xl border-[#444c56] border w-full">
              <figure className="p-5 text-[#adbac7] bg-transparent flex gap-2 items-center">
                <Image
                  width={32}
                  height={32}
                  src="/me.jpeg"
                  alt="Jaewoong2"
                  className="rounded-full"
                />
                <figcaption className="flex gap-2 text-[0.9em]">
                  <span className="font-semibold">@Jaewoong2</span>|
                  <span>{dayjs(createdAt).format('M월D일, YYYY')}</span>
                </figcaption>
              </figure>
            </div>

            <div className="text-[#adbac7] rounded-xl border-[#444c56] border w-full">
              <header className="border-b border-[#444c56] p-2 px-5 bg-[#2d333b] text-[0.8em] rounded-t-xl">
                <span className="flex gap-3 items-center">
                  <RocketIcon className="w-4 h-4 flex items-center" />
                </span>
              </header>
              <main className="markdown-body p-5 text-[#adbac7] bg-transparent">
                <div className="py-3 mb-3 font-bold text-3xl border-b border-[#444c56] w-full">
                  {title}
                </div>
                {children}
              </main>
            </div>
          </main>

          <section className="col-span-2 rounded-xl border-[#444c56] border h-fit">
            <div className="col-span-2 markdown-body prose text-ellipsis">
              <Toc markdownText={md} type={'raw'} />
            </div>
          </section>
        </section>
      </body>
    </html>
  )
}
