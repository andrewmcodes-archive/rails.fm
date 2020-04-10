import React, { FunctionComponent } from 'react'
import { SpringFadeUp } from '../../utils/animations'

export const Banner: FunctionComponent = ({ children }) => (
  <div className='relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl'>
    <div className='relative'>
      <SpringFadeUp>{children}</SpringFadeUp>
    </div>
  </div>
)
