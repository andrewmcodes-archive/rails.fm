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
  <footer className='w-full max-w-screen-xl px-4 py-12 mx-auto border-t border-gray-200 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
    <div className='flex justify-center md:order-2 '>
      {social.map((item) => (
        <a
          key={item.to}
          href={item.to}
          target='_blank'
          rel='noopener noreferrer'
          className='ml-4 text-2xl text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>{item.to}</span>
          {item.icon}
        </a>
      ))}
    </div>
    <div className='mt-8 md:mt-0 md:order-1'>
      Made with{' '}
      <span role='img' aria-label='Heart'>
        ❤️
      </span>{' '}
      © 2020,{' '}
      <a
        className='text-base leading-6 text-center text-gray-400 underline'
        href='https://andrewm.codes'
        target='_blank'
        rel='noopener noreferrer'
      >
        Andrew Mason
      </a>
    </div>
  </footer>
)
