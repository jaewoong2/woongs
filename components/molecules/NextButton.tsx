import PostFooterButton from '@components/atoms/PostFooterButton'
import RightIcon from '@components/icons/RightIcon'
import React, { PropsWithChildren } from 'react'

const NextButton = ({
  children,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) => {
  return (
    <PostFooterButton {...props}>
      {children}
      <RightIcon className="w-4 h-4" />
    </PostFooterButton>
  )
}

export default NextButton
