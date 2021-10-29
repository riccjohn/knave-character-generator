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

export const Primary: React.VFC<{}> = () => {
  return (
    <Shell character={character}>
      <Abilities />
    </Shell>
  )
}
