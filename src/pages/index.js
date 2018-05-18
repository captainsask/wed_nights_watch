import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      {data.allContentfulPlayers.edges.map(({ node }) => <h2>{node.name}</h2>)}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allContentfulPlayers(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          name
          node_locale
        }
      }
    }
  }
`
