import React from 'react'

export default ({ data }) => {
  const session = data.contentfulSession
  return (
    <div>
      <h1>{session.game}</h1>
      <h2>{session.date}</h2>
      {/* <div>{session.players.map(node => <h3>{node.name}</h3>)}</div> */}
    </div>
  )
}

export const query = graphql`
  query SessQuery($id: String!) {
    contentfulSession(id: { eq: $id }) {
      date
    }
  }
`
