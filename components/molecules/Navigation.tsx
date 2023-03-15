import Link from 'next/link'
import React from 'react'

type Props = {
  navigation: {
    href: string
    name: string
  }[]
}

const Navigation = ({ navigation }: Props) => {
  return (
    <nav className="flex gap-2">
      <h1 className="px-2 sr-only">{navigation.at(-1)?.name}</h1>
      {navigation.slice(0, navigation.length - 1)?.map(({ href, name }) => (
        <Link className="hover:text-gray-500" href={href} key={name}>
          {name}
          {' / '}
        </Link>
      ))}
      <Link
        className="hover:text-gray-500"
        href={navigation.at(-1)?.href ?? ''}
        key={navigation.at(-1)?.href}
      >
        {navigation.at(-1)?.name}
      </Link>
    </nav>
  )
}

export default Navigation
