import React from "react"
import { Abilities } from "./components"
import CharacterContext, { ICharacterContext } from "context/CharacterContext"
import Character from "character_generation/Character"
import GlobalFonts from "./fonts/fonts"

const App: React.FC = () => {
  const character = new Character()
  character.generate()

  const charContext: ICharacterContext = {
    character,
  }

  return (
    <CharacterContext.Provider value={charContext}>
      <div className="App">
        <GlobalFonts />
        <Abilities />
      </div>
    </CharacterContext.Provider>
  )
}

export default App
