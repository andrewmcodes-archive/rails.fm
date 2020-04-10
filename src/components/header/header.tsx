import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '../link'

export const Header = () => (
  <div className='mb-8'>
    <nav className='flex flex-row-reverse flex-wrap items-center justify-between pt-6'>
      <Link name='github' to='https://github.com/andrewmcodes/rails.fm'>
        <span className='inline-block mt-0 mr-4 text-gray-800 hover:text-blue'>
          <FontAwesomeIcon icon={['fab', 'github']} />
          {` `}
          Github
        </span>
      </Link>
    </nav>
  </div>
)
