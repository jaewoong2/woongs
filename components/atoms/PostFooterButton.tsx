import React from 'react'

const PostFooterButton = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      className={
        'bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 border ' + className
      }
      {...props}
    >
      {children}
    </button>
  )
}

export default PostFooterButton
