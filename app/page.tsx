import SideHeading from '@components/atoms/SideHeading'
import Body from '@components/sections/MarkDownBody'
import Navigation from '@components/sections/Navigation'
import SideSection from '@components/sections/SideSection'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full">
      <Navigation />
      <section className="grid grid-cols-12 gap-6 container mx-auto mt-8">
        <SideSection className="xl:flex xl:flex-col flex">
          <Image
            src="/me.jpeg"
            width={120}
            height={120}
            alt="임재웅"
            className="rounded-full xl:mx-auto xl:w-full w-23 p-2 m-2"
          />
          <div>
            <p className="font-semibold text-lg">임재웅</p>
            <SideHeading className="font-light">@Jaewoong2</SideHeading>
            <div className="flex gap-2">
              <span>깃허브</span>
              <span>노션</span>
            </div>
          </div>
        </SideSection>

        <div className="xl:col-span-10 col-span-full">
          <div className="pb-5">All Posts / (50) </div>
          <Body className="xl:col-span-10">Hello</Body>
        </div>
      </section>
    </section>
  )
}

export default Home
