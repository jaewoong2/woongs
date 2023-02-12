import React, { PropsWithChildren } from 'react'

const SideHeading = ({
  children,
  className,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>) => {
  return (
    <h4 className={'flex items-center mb-4 gap-2 ' + className} {...props}>
      {children}
    </h4>
  )
}

export default SideHeading
