import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '../link'
import Logo from '../../assets/svg/logo.svg'

export const Header = () => (
  <div className='mb-8'>
    <nav className='flex flex-wrap items-center justify-between p-6 bg-white'>
      <Link to='/' name='root'>
        <div className='flex items-center flex-shrink-0 mr-6 text-white'>
          <Logo />
        </div>
      </Link>

      <div className='flex items-center w-auto'>
        <Link name='github' to='https://github.com/andrewmcodes/rails.fm'>
          <span className='inline-block mt-0 mr-4 text-gray-800 hover:text-blue'>
            <FontAwesomeIcon icon={['fab', 'github']} />
            {` `}
            Github
          </span>
        </Link>
      </div>
    </nav>
  </div>
)
