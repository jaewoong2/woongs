import React from 'react'
import { Tag } from 'types/schema'

type Props = {
  tags: Tag[]
}

function Tags({ tags }: Props) {
  return (
    <div className="gap-2 flex flex-wrap">
      {tags.map((tag) => (
        <code
          key={tag.id}
          className={`font-medium text-xs bg-[#2d333b] p-2 rounded-lg whitespace-nowrap`}
        >
          {tag.name}
        </code>
      ))}
    </div>
  )
}

export default Tags
