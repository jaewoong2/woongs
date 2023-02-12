import PostFooterButton from '@components/atoms/PostFooterButton'
import LeftIcon from '@components/icons/LeftIcon'
import React, { PropsWithChildren } from 'react'

const PreviousButton = ({
  children,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) => {
  return (
    <PostFooterButton {...props}>
      <LeftIcon className="w-4 h-4" />
      {children}
    </PostFooterButton>
  )
}

export default PreviousButton
