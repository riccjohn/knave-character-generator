import styled from "styled-components"

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  caption {
    font-weight: bold;
  }

  thead tr {
    background: black;
    color: white;
  }

  thead th {
    padding: 0.5em 0;
  }

  tr:nth-child(even) {
    background: #dbdbdb;
  }

  td,
  th {
    padding: 0.5em 0;
    text-align: center;
  }
`

StyledTable.displayName = "StyledTable"
