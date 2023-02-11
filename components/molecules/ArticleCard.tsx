import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dayjs from 'dayjs'
import EyeIcon from '@components/icons/EyeIcon'

interface ArticleProps {
  title: string
  href: string
  thumbnail: string
  createdTime: string
}

const ArticleCard: React.FC<ArticleProps> = ({ title, href, thumbnail, createdTime }) => {
  return (
    <div className="p-5 rounded-md flex-col justify-between flex max-w-xs">
      <Link href={href}>
        <Image
          width={200}
          height={100}
          alt={title + '이미지'}
          src={thumbnail}
          className="max-h-50 w-full h-auto"
        />
        <h3 className="text-lg mb-2 mt-5">{title}</h3>
        <div className="flex justify-between text-gray-400 text-sm">
          <p>{dayjs(createdTime).format('YYYY.MM.DD').toString()}</p>
          <span className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" />
            500
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
