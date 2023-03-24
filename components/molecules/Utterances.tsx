import React, { useEffect, useRef, useState } from 'react'

const Utterances = () => {
  const commentsRef = useRef<HTMLElement | null>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    if (!commentsRef.current?.hasChildNodes()) {
      scriptRef.current = document.createElement('script')
      scriptRef.current.src = 'https://utteranc.es/client.js'
      scriptRef.current.async = true
      scriptRef.current.crossOrigin = 'anonymous'
      scriptRef.current.setAttribute('repo', 'jaewoong2/blog-comment')
      scriptRef.current.setAttribute('issue-term', 'pathname')
      scriptRef.current.setAttribute('theme', `github-light`)
      scriptRef.current.setAttribute('label', '💬 Discussion')
      commentsRef.current?.appendChild(scriptRef.current)
    }
  }, [])

  // 테마 바꾸려면
  // 스크립트를 지우고 다시 만들으면 됨 (테마 바꿔서)
  // 스크립트는 reload 라는게 없기 때문에

  return <section className="w-full" ref={commentsRef} />
}

export default React.memo(Utterances)
