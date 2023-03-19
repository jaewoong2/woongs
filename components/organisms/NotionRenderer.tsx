import React from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer as Notion } from 'react-notion-x'
import BlogLink from './BlogLink'
import { useRouter } from 'next/router'
import BlogSEO from '@components/templates/BlogSEO'

type Props = {
  recordMap: ExtendedRecordMap
  className?: string
  bodyClassName?: string
}
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const NotionRenderer = ({ recordMap, className, bodyClassName }: Props) => {
  const router = useRouter()

  return (
    <>
      <BlogSEO />
      <Notion
        mapPageUrl={(props) => {
          return router.asPath + '/' + props
        }}
        fullPage={true}
        disableHeader={true}
        darkMode={false}
        components={{
          Code: ({ ...props }: any) => <Code {...props} className="code" />,
          Link: ({ ...props }: any) => <BlogLink {...props} />,
          Collection,
          Equation,
          nextImage: Image,
        }}
        recordMap={recordMap}
        className={className}
        bodyClassName={bodyClassName}
      />
    </>
  )
}

export default NotionRenderer
