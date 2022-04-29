import styled from "styled-components"

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  p {
    margin: 1.5em 0;
    display: block;
  }

  a {
    color: dodgerblue;
  }

  @media (max-width: 768px) {
    margin: 0.5em 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0;

    p {
      margin: 0.5em;
    }
  }
`

StyledFooter.displayName = "StyledFooter"

export default StyledFooter
