import styled from "styled-components"

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  .traits {
    display: flex;
    flex-wrap: wrap;

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
`

StyledDescription.displayName = "StyledDescription"

export default StyledDescription
