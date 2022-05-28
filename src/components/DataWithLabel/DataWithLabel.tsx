import React from "react"
import StyledDataWithLabel from "./DataWithLabel.styles"

export interface IDataWithLabelProps {
  label: string
  value: string
}

const DataWithLabel: React.FC<IDataWithLabelProps> = ({ label, value }) => {
  return (
    <StyledDataWithLabel>
      <span>{label}</span>: {value}
    </StyledDataWithLabel>
  )
}

export default DataWithLabel
