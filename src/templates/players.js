import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PlayerTemplate extends React.Component {
  render() {
    const { players } = this.props.data
    return (
      <div>
        <h1>{players.name}</h1>
        <ul>
          <li>
            Characters:{' '}
            {players.character.map(element => {
              return <p>{element.name}</p>
            })}
          </li>
        </ul>
      </div>
    )
  }
}

PlayerTemplate.propTypes = propTypes

export default PlayerTemplate

export const PlayerPageQuery = graphql`
  query getPlayerBySlug($slug: String!) {
    players(playerSlug: { eq: $slug }) {
      name
      character {
        characterSlug
        name
      }
      games {
        gameSlug
        name
      }
    }
  }
`
