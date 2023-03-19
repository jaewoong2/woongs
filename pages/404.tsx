import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
  return (
    <div className="w-full h-full flex justify-center items-center font-semibold flex-col">
      <span>404: 잘못된 페이지 접근 입니다.</span>
      <Link href="/algorithm" className="p-2 bg-purple-400 text-white rounded-lg w-fit">
        목록
      </Link>
    </div>
  )
}

export default Custom404
