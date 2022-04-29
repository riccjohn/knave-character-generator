import React from "react"
import Character from "character_generation/Character"

export interface ICharacterContext {
  character: Character
}

const CharacterContext = React.createContext<ICharacterContext>({
  character: new Character(),
})

export default CharacterContext
