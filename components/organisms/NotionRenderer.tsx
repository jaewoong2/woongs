import React from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer as Notion } from 'react-notion-x'

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
  return (
    <Notion
      fullPage={true}
      disableHeader={true}
      darkMode={false}
      components={{
        Code: ({ ...props }: any) => <Code {...props} className="code" />,
        Collection,
        Equation,
        nextImage: Image,
        nextLink: Link,
      }}
      recordMap={recordMap}
      className={className}
      bodyClassName={bodyClassName}
    />
  )
}

export default NotionRenderer
