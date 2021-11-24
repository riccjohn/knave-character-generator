import React from "react"
import StyledFooter from "./Footer.styles"

const Footer: React.FC = () => {
  return (
    <StyledFooter data-testid="footer">
      <p>
        {"Based on "}
        <a href="https://www.drivethrurpg.com/product/250888/Knave">Knave</a>
        {" by "}
        <a href="http://questingblog.com/">Ben Milton</a>
      </p>
      <p>
        {"Developed with ♥ in Madison, WI by "}
        <a href="www.github.com/riccjohn">John Riccardi</a>
      </p>
    </StyledFooter>
  )
}

export default Footer
