import React from "react"
import { Meta } from "@storybook/react"
import Abilities from "."
import Character from "character_generation/Character"
import { Shell } from "components"

export default {
  component: Abilities,
  title: "Components/Abilities",
} as Meta

const character = new Character()
character.generate()

interface IProps {
  characterOverride?: Character
}

export const Primary: React.FC<IProps> = ({ characterOverride }) => {
  return (
    <Shell character={characterOverride ? characterOverride : character}>
      <Abilities />
    </Shell>
  )
}
