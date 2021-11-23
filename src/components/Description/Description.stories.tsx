import React from "react"
import { Meta } from "@storybook/react"
import { Shell } from "components"
import Description from "."
import Character from "character_generation/Character"

export default {
  component: Description,
  title: "Components/Description",
} as Meta

const character = new Character()
character.generate()

interface IProps {
  characterOverride?: Character
}

export const Primary: React.VFC<IProps> = ({ characterOverride }) => {
  return (
    <Shell character={characterOverride ? characterOverride : character}>
      <Description />
    </Shell>
  )
}
