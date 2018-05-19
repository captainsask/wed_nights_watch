import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SessionTemplate extends React.Component {
  render() {
    const { sessions } = this.props.data
    const sessDate = new Date(sessions.sessionDate).toLocaleString('en-US')
    return (
      <div>
        <h1>{sessions.name}</h1>
        <ul>
          <li>Game: {sessions.games.name}</li>
          <li>Date: {sessDate}</li>
          <li>Location: {sessions.location}</li>
          <li>Description: {sessions.description}</li>
        </ul>
      </div>
    )
  }
}

SessionTemplate.propTypes = propTypes

export default SessionTemplate

export const SessionPageQuery = graphql`
  query getSessionBySlug($slug: String!) {
    sessions(sessionSlug: { eq: $slug }) {
      description
      games {
        gameSlug
        name
      }
      id
      location
      sessionDate
      sessionName
      sessionSlug
    }
  }
`
