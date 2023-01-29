import React, { PropsWithChildren } from 'react'

const PostHead = ({ children }: PropsWithChildren) => {
  return (
    <header className="border-b border-[#444c56] p-2 px-5 bg-[#2d333b] text-[0.8em] rounded-t-xl">
      <span className="flex gap-3 items-center">{children}</span>
    </header>
  )
}

export default PostHead
