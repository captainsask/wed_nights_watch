import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CharacterTemplate extends React.Component {
  render() {
    const { characters } = this.props.data
    return (
      <div>
        <h1>{characters.name}</h1>
        <ul>
          <li>Player: {characters.players.name}</li>
          <li>Description: {characters.description}</li>
          <li>History: {characters.history}</li>
        </ul>
      </div>
    )
  }
}

CharacterTemplate.propTypes = propTypes

export default CharacterTemplate

export const CharacterPageQuery = graphql`
  query getCharacterBySlug($slug: String!) {
    characters(characterSlug: { eq: $slug }) {
      name
      players {
        name
      }
      history
      description
    }
  }
`
