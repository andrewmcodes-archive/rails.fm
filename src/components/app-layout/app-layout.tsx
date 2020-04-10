import React, { FunctionComponent } from 'react'

export const AppLayout: FunctionComponent = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>{children}</div>
  )
}
