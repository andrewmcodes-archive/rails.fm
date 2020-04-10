import React from 'react'

import { Intro } from '../components/intro'
import { Banner } from '../components/banner'
import { Container } from '../components/container'
import { Podcasts } from '../components/podcasts'
import { Canberra } from '../components/canberra'
import { SpringFadeUp } from '../utils/animations'

export default () => {
  return (
    <>
      <Canberra title='Home' />

      <Banner>
        <h1 className='text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-6xl sm:leading-10'>
          Rails.fm
        </h1>
        <p className='max-w-3xl mx-auto mt-4 text-xl leading-7 text-center text-gray-500'>
          Listen to news, interviews, and discussions about Ruby &amp; Rails.
        </p>
      </Banner>
      <Container>
        <Intro>
          <SpringFadeUp>
            <Podcasts />
          </SpringFadeUp>
        </Intro>
      </Container>
    </>
  )
}
