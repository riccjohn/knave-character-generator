import React from "react"
import { Meta } from "@storybook/react"
import { Shell } from "components"
import Items from "."
import Character from "character_generation/Character"

export default {
  component: Items,
  title: "Components/Items",
} as Meta

const character = new Character()
character.generate()

interface IProps {
  characterOverride?: Character
}

export const Primary: React.FC<IProps> = ({ characterOverride }) => {
  return (
    <Shell character={characterOverride ? characterOverride : character}>
      <Items />
    </Shell>
  )
}
