import React from 'react'

import SideHeading from '@components/atoms/SideHeading'
import TagIcon from '@components/icons/TagIcon'
import SideSection from '@components/sections/SideSection'
import Tags from '@components/sections/Tags'
import { Tag } from 'types/schema'

type Props = {
  tags: Tag[]
}

const LeftSection = ({ tags }: Props) => {
  return (
    <SideSection>
      <SideHeading>
        Tags
        <TagIcon className="w-5 h-5" />
      </SideHeading>
      <Tags tags={tags} />
    </SideSection>
  )
}

export default LeftSection
