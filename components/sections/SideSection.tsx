import React, { PropsWithChildren } from 'react'

const SideSection = ({
  children,
  className,
  ...props
}: PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>) => {
  return (
    <section
      className={
        'xl:col-span-2 rounded-xl border-[#444c56] border h-fit p-5 col-span-full ' + className
      }
      {...props}
    >
      {children}
    </section>
  )
}

export default SideSection
