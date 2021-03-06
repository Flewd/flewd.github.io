require(`dotenv`).config({
  path: `.env`,
})

// node_modules
// @LEOARTS
// gatsby-theme-emillia

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {

  siteMetadata: {
    siteTitleAlt: `Michael Flood's Portfolio`,

    siteTitle: `Michael Flood's Game Development Portfolio`,
    siteHeadline: `Michael Flood`,
    siteUrl: `https://mike-flood.com`,
    siteDescription: `Game Development portfolio of Michael Flood`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {

        name: `Michael Flood`,
        showThemeAuthor: true,
        formatString: 'MM/DD/YYYY',
        location: '',
        socialMedia: [
          {
            title: 'Resume',
            href: 'https://drive.google.com/file/d/1Y4lS-cI8iUsy_Cz8Ep4hda-_6qFItyQE/view?usp=sharing'
          },
          {
            title: `Twitter`,
            href: `https://www.twitter.com/MikeFlewd`
          },
          {
            title: 'linkedIn',
            href: 'https://www.linkedin.com/in/michaelrflood/'
          },
          {
            title: 'Itch.io',
            href: 'https://flewd.itch.io/'
          },
          {
            title: 'GitHub',
            href: 'https://github.com/Flewd'
          }
        ]

      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-grid",
            //resolve: require.resolve(`..`),
            options: {
              gridGap: "20px",
            },
          },
          `gatsby-remark-relative-images`,
          {
            
              resolve: `gatsby-remark-images`,
              options: {
                linkImagesToOriginal: true,
              },
            
          }
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Flood`,
        short_name: `Mike Flood's Portfolio`,
        description: `Michael Flood's Game Development Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
