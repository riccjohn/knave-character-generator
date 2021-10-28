import React from "react"
import { Abilities, Shell } from "./components"
import Character from "character_generation/Character"
import { Subtitle } from "StyledComponents"

const App: React.FC = () => {
  const character = new Character()
  character.generate()

  return (
    <Shell character={character}>
      <div className="App">
        <h1>Knave</h1>
        <Subtitle>Traits</Subtitle>
        <Subtitle>Items</Subtitle>
        <Abilities />
      </div>
    </Shell>
  )
}

export default App
