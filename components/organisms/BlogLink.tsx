import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>
const seperators = 'https'

const BlogLink = ({ ...props }: Props) => {
  const isBlogsPost = seperators && props.href?.includes(seperators)
  const router = useRouter()

  return isBlogsPost ? (
    <a {...props} />
  ) : (
    <Link {...props} href={router.asPath + '/' + props.href} ref={null} />
  )
}

export default BlogLink
