import React, { useMemo } from 'react'
import Link from 'next/link'

import NextButton from '@components/molecules/NextButton'
import PreviousButton from '@components/molecules/PreviousButton'
import { useRouter } from 'next/router'
import useIsMobile from 'hooks/useIsMobile'
import Utterances from '@components/molecules/Utterances'

type Props = {
  previous?: {
    slug: string
    id: string
  }
  next?: {
    slug: string
    id: string
  }
}

const Footer = ({ previous, next }: Props) => {
  const router = useRouter()
  const [isMobile] = useIsMobile()

  const previousId = useMemo(
    () => router.pathname.replace('[id]', previous?.id ?? ''),
    [router, previous]
  )

  const nextId = useMemo(() => router.pathname.replace('[id]', next?.id ?? ''), [router, next])

  return (
    <footer>
      <section className="px-2 pt-4 pb-8 w-full flex justify-center">
        <div className={`flex w-full px-2 ${previous ? 'justify-between' : 'justify-end'}`}>
          {previous && (
            <Link href={`${previousId}`}>
              <PreviousButton
                disabled={!previous}
                className={`flex justify-center items-center gap-2 p-4 py-2 disabled:cursor-not-allowed ${
                  isMobile ? 'w-[100%] text-sm max-w-[150px]' : ''
                }`}
              >
                <span className="max-w-[300px] overflow-clip whitespace-nowrap text-ellipsis">
                  {previous.slug?.substring(0, 20)}
                </span>
              </PreviousButton>
            </Link>
          )}
          {next?.slug && (
            <Link href={`${nextId}`}>
              <NextButton
                disabled={!next}
                className={`flex justify-center items-center gap-2 p-4 py-2 disabled:cursor-not-allowed ${
                  isMobile ? 'w-[100%] text-sm max-w-[150px]' : ''
                }`}
              >
                <span className="max-w-[300px] overflow-clip whitespace-nowrap text-ellipsis">
                  {next.slug?.substring(0, 20)}
                </span>
              </NextButton>
            </Link>
          )}
        </div>
      </section>
      <Utterances />
    </footer>
  )
}

export default React.memo(Footer)
