const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Rails.fm`,
    siteUrl: `https://rails.fm`,
    description: `Listen to news, interviews, and discussions about Ruby & Rails.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rails.fm`,
        short_name: `rails.fm`,
        start_url: `/`,
        background_color: `#dfdfdf`,
        theme_color: `#BD003D`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: path.resolve(__dirname, `src/assets/svg`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#BD003D`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
        whitelist: [`h-48`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
