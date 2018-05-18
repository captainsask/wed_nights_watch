'use strict'

module.exports = `
    {
        allCharacters {
            edges {
                character: node {
                    characterSheet {
                        fileName
                    }
                    characterSlug
                    createdAt
                    description
                    games {
                        gameSlug
                        id
                    }
                    history
                    id
                    name
                    players {
                        name
                        playerSlug
                    }
                    portrait {
                        fileName
                    }
                }
            }
        }
        allPlayers {
            edges {
                player: node {
                    id
                    bio
                    birthDate
                    character {
                        characterSlug
                        name
                    }
                    games {
                        gameSlug
                        name
                    }
                    name
                    playerSlug
                }
            }
        }
    }
`
