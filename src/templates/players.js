import React from 'react'

export default ({ data }) => {
  const player = data.contentfulPlayers
  return (
    <div>
      <h1>{player.name}</h1>
    </div>
  )
}

export const query = graphql`
  query PlayerQuery($id: String!) {
    contentfulPlayers(id: { eq: $id }) {
      name
    }
  }
`
