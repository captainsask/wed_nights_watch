/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const _ = require('lodash')
const slash = require('slash')
const queryAll = require('./gatsby/queryAll.js')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node }) => {
  console.log(`onCreateNode:`, node.internal.type)
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const characterPageTemplate = path.resolve('./src/templates/characters.js')
    const playerPageTemplate = path.resolve('./src/templates/players.js')
    const gamePageTemplate = path.resolve('./src/templates/games.js')
    const sessionPageTemplate = path.resolve('./src/templates/sessions.js')

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const characters = result.data.allCharacters.edges
        characters.forEach(({ character }) => {
          const path = 'characters/' + character.characterSlug
          createPage({
            path,
            component: characterPageTemplate,
            context: {
              slug: character.characterSlug,
            },
          })
        })

        const players = result.data.allPlayers.edges
        players.forEach(({ player }) => {
          const path = 'players/' + player.playerSlug
          createPage({
            path,
            component: playerPageTemplate,
            context: {
              slug: player.playerSlug,
            },
          })
        })

        const games = result.data.allGames.edges
        games.forEach(({ game }) => {
          const path = 'games/' + game.gameSlug
          createPage({
            path,
            component: gamePageTemplate,
            context: {
              slug: game.gameSlug,
            },
          })
        })

        const sessions = result.data.allSessions.edges
        sessions.forEach(({ session }) => {
          const path = 'sessions/' + session.sessionSlug
          createPage({
            path,
            component: sessionPageTemplate,
            context: {
              slug: session.sessionSlug,
            },
          })
        })
      })
    )
  })
}
