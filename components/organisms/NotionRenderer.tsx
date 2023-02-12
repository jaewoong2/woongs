import { NotionRenderer as Notion } from 'react-notion-x'
import React from 'react'
import dynamic from 'next/dynamic'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import { ExtendedRecordMap } from 'notion-types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  recordMap: ExtendedRecordMap
  id: string
}

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
        Modal,
        Pdf,
        nextImage: Image,
        nextLink: Link,
      }}
    />
  )
}

export default NotionRenderer

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
)

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(() => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf), {
  ssr: false,
})
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
  ssr: false,
})
