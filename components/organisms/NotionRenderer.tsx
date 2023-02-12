import React from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer as Notion } from 'react-notion-x'

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'

type Props = {
  recordMap: ExtendedRecordMap
  id: string
}

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
)

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)

const NotionRenderer = ({ recordMap }: Props) => {
  return (
    <Notion
      recordMap={recordMap}
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
    />
  )
}

export default NotionRenderer
