/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import path from 'path';
import _ from 'lodash';
import slash from 'slash';
// import queryAll from './gatsby/queryAll.js';
import { createFilePath } from 'gatsby-source-filesystem';

exports.createNode = ({node}) => {
  console.log(`onCreateNode:`, node.internal.type);
}


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      query IndexQuery {
        allContentfulPlayers(filter: { node_locale: { eq: "en-US" } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create Player pages
        const playerTemplate = path.resolve(`./src/templates/players.js`)
        // We want to create a detailed page for each
        // product node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulPlayers.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/players/${edge.node.id}/`,
            component: slash(playerTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      .then(() => {
        graphql(`
          query SessionQuery {
            allContentfulSession(filter: { node_locale: { eq: "en-US" } }) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `)
      })
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const sessionTemplate = path.resolve('./src/templates/sessions.js')
        _.each(result.data.allContentfulSession.edges, edge => {
          createPage({
            path: `/sessions/${edge.node.id}/`,
            component: slash(sessionTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
  })
}
