module.exports = `{
    allCharacters {
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
        images {
            fileName
        }
    name
    players {
      name
      playerSlug
    }
    portrait {
      fileName
    }
  }
}`