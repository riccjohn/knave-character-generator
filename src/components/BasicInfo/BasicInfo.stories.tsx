import React from "react"
import { Meta } from "@storybook/react"
import { Shell } from "components"
import BasicInfo from "."
import Character from "character_generation/Character"

export default {
  component: BasicInfo,
  title: "Components/BasicInfo",
} as Meta

const character = new Character()
character.generate()

interface IProps {
  characterOverride?: Character
}

export const Primary: React.FC<IProps> = ({ characterOverride }) => {
  return (
    <Shell character={characterOverride ? characterOverride : character}>
      <BasicInfo />
    </Shell>
  )
}
