import styled from "styled-components"

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .traits {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.5em;

    p {
      width: fit-content;

      span {
        font-family: SebaldusGotisch;
        font-size: 1.1em;
      }

      padding: 0.25em 0.5em;
      margin: 0.5em;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

StyledDescription.displayName = "StyledDescription"

export default StyledDescription
