import React from "react"
import { Meta } from "@storybook/react"
import Footer from "."

export default {
  component: Footer,
  title: "Components/Footer",
} as Meta

export const Primary: React.FC<{}> = () => {
  return <Footer />
}
