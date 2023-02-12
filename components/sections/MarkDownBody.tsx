import RocketIcon from '@components/icons/RocketIcon'
import React, { PropsWithChildren } from 'react'
import AuthorInfo from './AuthorInfo'
import PostHead from './PostHead'

type Props = {
  createdAt?: string
  title?: string
  children: React.ReactNode
}

const MarkDownBody = ({
  children,
  createdAt,
  title,
  className,
  ...props
}: PropsWithChildren<
  Props & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>) => {
  return (
    <main
      className={
        'h-full flex flex-col container gap-5 items-center w-full mx-auto col-span-full xl:col-span-8 ' +
        className
      }
      {...props}
    >
      {createdAt && <AuthorInfo createdAt={createdAt} />}

      <div className="text-[#adbac7] rounded-xl border-[#444c56] border w-full">
        <PostHead>
          <RocketIcon className="w-4 h-4 flex items-center" />
        </PostHead>
        <section className="markdown-body p-5 text-[#adbac7] bg-transparent">
          {title && (
            <div className="py-3 mb-3 font-bold text-3xl border-b border-[#444c56] w-full">
              {title}
            </div>
          )}
          {children}
        </section>
      </div>
    </main>
  )
}

export default MarkDownBody
