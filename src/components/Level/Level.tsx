import CharacterContext from "context/CharacterContext"
import React, { useContext } from "react"
import StyledLevel from "./Level.styles"

const Level: React.FC = () => {
  const context = useContext(CharacterContext)
  const { character } = context
  const { level } = character

  return <StyledLevel>Level: {level}</StyledLevel>
}

export default Level
