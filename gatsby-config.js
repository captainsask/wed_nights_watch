module.exports = {
  siteMetadata: {
    title: 'The Annals of the Nights Watch',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
  
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/40643069-cfa3-4967-aff4-bf8fe256c943`,
        query: require('./gatsby/configQuery')
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
