import styled from "styled-components"

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5em 0;

  p {
    margin: 0 1em;
  }

  a {
    color: dodgerblue;
  }
`

StyledFooter.displayName = "StyledFooter"

export default StyledFooter
