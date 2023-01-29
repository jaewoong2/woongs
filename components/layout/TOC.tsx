import SideSection from '@components/sections/SideSection'
import React, { PropsWithChildren } from 'react'
import Toc from 'react-toc'

const TOC = ({
  children,
  variant,
}: PropsWithChildren<{ children: string; variant: 'mobile' | 'desktop' }>) => {
  return (
    <SideSection className={variant === 'desktop' ? 'hidden xl:flex' : 'flex xl:hidden'}>
      <div className="col-span-2 markdown-body prose text-ellipsis">
        <Toc markdownText={children} />
      </div>
    </SideSection>
  )
}

export default TOC
