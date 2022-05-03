import React from "react"
import { Meta } from "@storybook/react"
import { Shell } from "components"
import Hitpoints from "."
import Character from "character_generation/Character"

export default {
  component: Hitpoints,
  title: "Components/Hitpoints",
} as Meta

const character = new Character()
character.generate()

interface IProps {
  characterOverride?: Character
}

export const Primary: React.FC<IProps> = ({ characterOverride }) => {
  return (
    <Shell character={characterOverride ? characterOverride : character}>
      <Hitpoints />
    </Shell>
  )
}
