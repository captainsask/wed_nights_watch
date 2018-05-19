import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'
import g from 'glamorous'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Portrait = g.img({
  width: '16em',
})

const CharacterSheet = g.img({
  width: '30em',
})

class CharacterTemplate extends React.Component {
  render() {
    const { characters } = this.props.data
    console.log(characters.portrait.url)
    return (
      <div>
        <h1>{characters.name}</h1>
        <Portrait src={characters.portrait.url} />
        <ul>
          <li>Player: {characters.players.name}</li>
          <li>Description: {characters.description}</li>
          <li>History: {characters.history}</li>
        </ul>
        <a href={characters.characterSheet.url} target="_blank">
          Character Sheet
        </a>
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
      portrait {
        url
      }
      characterSheet {
        url
      }
    }
  }
`
