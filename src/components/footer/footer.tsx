import React, { ReactNode } from 'react'

interface ISocial {
  icon: ReactNode
  to: string
}

interface IFooterProps {
  logo: ReactNode
  social: ISocial[]
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <footer className='border-t border-gray-200 w-full max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
    <div className='flex justify-center md:order-2 '>
      {social.map((item) => (
        <a
          key={item.to}
          href={item.to}
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-gray-500 ml-4 text-2xl'
        >
          <span className='sr-only'>{item.to}</span>
          {item.icon}
        </a>
      ))}
    </div>
    <div className='mt-8 md:mt-0 md:order-1'>
      <a
        className='text-center text-base leading-6 text-gray-400'
        href='https://andrewm.codes'
        target='_blank'
        rel='noopener noreferrer'
      >
        {logo}
      </a>
    </div>
  </footer>
)
