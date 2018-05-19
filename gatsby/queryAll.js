'use strict'

module.exports = `
    {
        allCharacters {
            edges {
                character: node {
                    characterSheet {
                        url
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
                        url
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
        allGames {
            edges {
                game: node {
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
        }
        allSessions {
            edges{
                session: node {
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
        }
    }
`
