module.exports = {
  siteMetadata: {
    title: 'The Annals of the Nights Watch',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
  
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/cjhb1qhlm073701482zacvm53`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjY2NjM3OTEsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqaGIxcWhsbTA3MzcwMTQ4MnphY3ZtNTMiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqaGM4N2M4MDB0MnQwMTgwNmdobWc2eXoifQ.Gjlv75eFKaRe_1WMdJODlt-JsdVY7F6eo4rPo5UBIxY`,
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
    `gatsby-plugin-offline`
  ]
}
