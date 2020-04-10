const title = 'Rails.fm'
const description =
  'Listen to news, interviews, and discussions about Ruby & Rails.'
const favicon = 'static/favicon.png'
const share = 'static/share.png'

export interface IHelmet {
  title: string
  titleTemplate: string
  description: string
  htmlAttributes?: {
    lang: string
  }
  meta: {
    name?: string
    property?: string
    content: string
  }[]
  link: {
    rel: string
    type: string
    href: string
  }[]
}

export const base_helmet: IHelmet = {
  title,
  description,
  titleTemplate: 'Rails.fm',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    {
      name: 'msapplication-navbutton-color',
      content: '#161e2e',
    },
    { name: 'msapplication-TileColor', content: '#e53e3e' },
    { name: 'theme-color', content: '#161e2e' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    // { name: "twitter:image", content: share },
    { name: 'twitter:site', content: '@andrewmcodes' },
    { name: 'twitter:creator', content: '@andrewmcodes' },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }],
}
