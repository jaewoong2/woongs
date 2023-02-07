import Link from 'next/link'
import React from 'react'

interface ArticleProps {
  title: string
  description: string
  href: string
}

const ArticleCard: React.FC<ArticleProps> = ({ title, description, href }) => {
  return (
    <Link href={href}>
      <div className="bg-white shadow-md rounded p-6 w-full hover:-translate-y-3 transition-transform">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <button className="bg-blue-500 text-white rounded p-2">더보기</button>
      </div>
    </Link>
  )
}

export default ArticleCard
