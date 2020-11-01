require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development.local or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}.local`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://api.yepstepz.io/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-graphql-config`,
    {
      resolve: 'gatsby-source-simplecast',
      options: {
        token: process.env.PODCAST_TOKEN,
        podcastId: 'a5e421cb-d76b-44e5-8f77-9ed8e574b578',
      },
    },
  ],
}
