import React, { FunctionComponent } from 'react'

export const Container: FunctionComponent = ({ children }) => (
  <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>{children}</div>
)
