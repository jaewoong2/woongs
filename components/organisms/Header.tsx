import HambergerIcon from '@components/icons/HambergerIcon'
import React from 'react'

const Header = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <nav
      className={`w-full py-5 flex gap-2 col-span-full sticky top-0 bg-white z-10 ${className} items-center`}
      {...props}
    >
      <HambergerIcon />
      {children}
    </nav>
  )
}

export default Header
