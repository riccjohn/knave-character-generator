import React from "react"
import StyledBasicInfo from "./BasicInfo.styles"
import { Level, Hitpoints } from "components"

const BasicInfo: React.FC = () => {
  return (
    <StyledBasicInfo>
      <Level />
      <Hitpoints />
    </StyledBasicInfo>
  )
}

export default BasicInfo
