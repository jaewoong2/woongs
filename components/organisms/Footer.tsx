import Link from 'next/link'
import React from 'react'
import NextButton from '@components/molecules/NextButton'
import PreviousButton from '@components/molecules/PreviousButton'

type Props = {
  prevoius?: {
    slug: string
    id: string
  }
  next?: {
    slug: string
    id: string
  }
}

const Footer = ({ prevoius, next }: Props) => {
  return (
    <footer className="px-2 pt-4 pb-8 w-full flex justify-center">
      <div
        className={`flex w-full px-2 ${
          prevoius ? 'justify-between' : 'justify-end'
        }  max-w-[720px]`}
      >
        {prevoius && (
          <Link href={`/${prevoius.id}`}>
            <PreviousButton
              disabled={!prevoius}
              className="flex justify-center items-center gap-2 p-4 py-2 disabled:cursor-not-allowed"
            >
              {prevoius.slug.substring(0, 20)}
            </PreviousButton>
          </Link>
        )}
        {next && (
          <Link href={`/${next.id}`}>
            <NextButton
              disabled={!next}
              className="flex justify-center items-center gap-2 p-4 py-2 disabled:cursor-not-allowed"
            >
              {next.slug.substring(0, 20)}
            </NextButton>
          </Link>
        )}
      </div>
    </footer>
  )
}

export default Footer
