import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class GameTemplate extends React.Component {
  render() {
    const { games } = this.props.data
    return (
      <div>
        <img src={games.promoImage.url} />
        <h1>{games.name}</h1>
        <ul>
          <li>Description: {games.description}</li>
          <li>
            Characters: {''}
            {games.characters.map(character => {
              return <p>{character.name}</p>
            })}
          </li>
          <li>
            Sessions: {''}
            {games.session.map(sess => {
              const sessDate = new Date(sess.sessionDate)
              return (
                <p>
                  {sess.sessionName} : {sessDate.toLocaleDateString('en-US')}
                </p>
              )
            })}
          </li>
        </ul>
      </div>
    )
  }
}

GameTemplate.propTypes = propTypes

export default GameTemplate

export const GamePageQuery = graphql`
  query getGameBySlug($slug: String!) {
    games(gameSlug: { eq: $slug }) {
      characters {
        characterSlug
        name
      }
      description
      gameSlug
      id
      name
      player {
        name
        playerSlug
      }
      promoImage {
        url
      }
      session {
        sessionName
        sessionDate
        sessionSlug
      }
      system
      startDate
    }
  }
`
