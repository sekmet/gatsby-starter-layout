require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

const title = `Gatsby Typescript Starter`;
const description = `A high performance skeleton typescript starter for GatsbyJS that focuses on SEO features development environment.`;
const author =  `Carlos Guimaraes`;
const keywords = `gatsbyjs, starter, typescript`;

const plugins = [
`gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  'gatsby-plugin-typescript',
  'gatsby-plugin-postcss',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-typescript`,
      short_name: `typescript-starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      crossOrigin: `use-credentials`,
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      cacheId: `starter-typescript-offline`
    }
  },
];

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    keywords,
    siteUrl: 'https://localhost:9001'
  },
  plugins
}
