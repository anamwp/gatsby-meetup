module.exports = {
  siteMetadata: {
    title: `Gatsby Meetup #01, Bangladesh`,
    description: `We are glad to announce the very first Gatsby event in Bangladesh on 9th instant. Appreciating your overwhelming interest. It's here for the first time for exchanging knowledge about Gatsby, Headless WordPress, GraphQL.`,
    author: `@theanamhossain`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:400,700,800', 'Roboto']
        }
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.DEPLOY_URL 
        //   ? 'https://gatsby-meeup-bangladesh-db.herokuapp.com'
        //   : 'http://localhost:1337',
        apiURL: `https://gatsby-meeup-bangladesh-db.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`speakers`, `meetups`, `partners`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Meetup Bangladesh`,
        short_name: `Gatsby Meeup`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
