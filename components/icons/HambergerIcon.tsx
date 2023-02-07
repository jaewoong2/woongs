import React from 'react'

const HambergerIcon = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      className={`flex items-center px-1 py-1 rounded text-gray-900 hover:bg-gray-300 ${className}`}
      {...props}
    >
      <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  )
}

export default HambergerIcon
