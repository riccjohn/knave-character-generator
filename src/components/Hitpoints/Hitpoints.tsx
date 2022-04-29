import React, { useContext } from "react"
import CharacterContext from "context/CharacterContext"
import StyledHitpoints from "./Hitpoints.styles"

const Hitpoints: React.FC = () => {
  const context = useContext(CharacterContext)
  const { character } = context
  const { maxHp } = character

  return <StyledHitpoints>{`Hitpoints: ${maxHp}/${maxHp}`}</StyledHitpoints>
}

export default Hitpoints
