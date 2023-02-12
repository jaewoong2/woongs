import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

const Navigation = ({
  className,
  children,
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>) => {
  return (
    <nav
      className={
        'text-[0.9em] flex w-full py-5 items-center text-[#cdd9e5] bg-[#2d333b] ' + className
      }
      {...props}
    >
      <ul className="flex justify-between w-full px-8">
        <li>
          <Link href={'/'}>W-WORLD</Link>
        </li>
        <li>
          <Link href={'/me'}>About & Contact</Link>
        </li>
        {children}
      </ul>
    </nav>
  )
}

export default Navigation
