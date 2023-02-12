import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'

type Props = {
  createdAt: string
}

dayjs.locale('ko')

const AuthorInfo = ({ createdAt }: Props) => {
  return (
    <div className="text-[#adbac7] rounded-xl border-[#444c56] border w-full">
      <figure className="p-5 text-[#adbac7] bg-transparent flex gap-2 items-center">
        <Image width={32} height={32} src="/me.jpeg" alt="Jaewoong2" className="rounded-full" />
        <figcaption className="flex gap-2 text-[0.9em]">
          <span className="font-semibold">@Jaewoong2</span>|
          <span>{dayjs(createdAt).format('M월D일, YYYY')}</span>
        </figcaption>
      </figure>
    </div>
  )
}

export default AuthorInfo
