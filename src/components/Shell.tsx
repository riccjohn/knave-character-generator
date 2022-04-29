import React from "react"
import Character from "character_generation/Character"
import CharacterContext, { ICharacterContext } from "context/CharacterContext"
import GlobalFonts from "fonts/fonts"

interface IProps {
  character: Character
  children: React.ReactElement<unknown>
}

const Shell: React.FC<IProps> = ({ character, children }) => {
  const charContext: ICharacterContext = {
    character,
  }

  return (
    <CharacterContext.Provider value={charContext}>
      <GlobalFonts />
      {children}
    </CharacterContext.Provider>
  )
}

export default Shell
