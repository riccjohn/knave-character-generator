import React from "react"
import { Meta } from "@storybook/react"
import { DataWithLabel } from "components"
import GlobalFonts from "fonts/fonts"

export default {
  component: DataWithLabel,
  title: "Components/DataWithLabel",
} as Meta

export const Primary: React.FC<{}> = () => {
  return (
    <>
      <GlobalFonts />
      <DataWithLabel label={"Name"} value={"Michael Scarn"} />
    </>
  )
}
