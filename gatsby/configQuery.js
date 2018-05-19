module.exports = `
{
    allCharacters {
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
        images {
            url
        }
        name
        players {
            name
            playerSlug
        }
        portrait {
            url
        }
    }
    allPlayers {
        id
        bio
        birthDate
        character {
            characterSlug
            name
        }
        games{
            gameSlug
            name
        }
        headshot{
            url
        }
        name
        images{
            url
        }
        playerSlug    
    }
    allGames{
        characters{
          characterSlug
          name
        }
        description
        gameSlug
        id
        name
        player{
          name
          playerSlug
        }
        promoImage{
            url
        }
        session{
          sessionName
          sessionDate
          sessionSlug
        }
        system
        startDate
      }
      allSessions{
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
}`
