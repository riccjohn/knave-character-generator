import React from "react"
import { Meta, Story } from "@storybook/react"
import GlobalFonts from "fonts/fonts"
import { Subtitle } from "StyledComponents"

export default {
  component: Subtitle,
  title: "StyledComponents/Subtitle",
} as Meta

interface IStoryProps {
  text: string
}

const Template: Story<IStoryProps> = ({ text }) => {
  return (
    <>
      <GlobalFonts />
      <Subtitle>{text}</Subtitle>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  text: "Subtitle!",
}
