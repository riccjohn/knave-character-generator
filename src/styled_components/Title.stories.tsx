import React from "react"
import { Meta, Story } from "@storybook/react"
import { Title } from "."
import { Shell } from "components"
import Character from "character_generation/Character"

export default {
  component: Title,
  title: "StyledComponents/Title",
} as Meta

interface IStoryProps {
  text: string
}

const character = new Character()

const Template: Story<IStoryProps> = ({ text }) => {
  return (
    <Shell character={character}>
      <Title>{text}</Title>
    </Shell>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  text: "Knave",
}
