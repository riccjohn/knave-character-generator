import React from "react"
import { Meta, Story } from "@storybook/react"
import { Subtitle } from "StyledComponents"
import { Shell } from "components"
import Character from "character_generation/Character"

export default {
  component: Subtitle,
  title: "StyledComponents/Subtitle",
} as Meta

interface IStoryProps {
  text: string
}

const character = new Character()

const Template: Story<IStoryProps> = ({ text }) => {
  return (
    <Shell character={character}>
      <Subtitle>{text}</Subtitle>
    </Shell>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  text: "Subtitle!",
}
