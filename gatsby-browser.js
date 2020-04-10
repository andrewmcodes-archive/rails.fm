import React from 'react'
import { IndexLayout } from './src/layouts/index'
import { Header } from './src/components/header'
import { Footer } from './src/components/footer'

import Logo from './src/assets/svg/logo.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './src/css/style.css'

library.add(fab)

export const wrapPageElement = ({ element, props }) => (
  <IndexLayout {...props}>
    <Header />
    <div className='flex-grow mt-8'>{element}</div>
    <Footer
      logo={<Logo />}
      social={[
        {
          icon: <FontAwesomeIcon icon={['fab', 'twitter']} />,
          to: 'https://twitter.com/andrewmcodes',
        },
        {
          icon: <FontAwesomeIcon icon={['fab', 'github']} />,
          to: 'https://github.com/andrewmcodes',
        },
      ]}
    />
  </IndexLayout>
)
