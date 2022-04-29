import styled from "styled-components"

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

StyledTable.displayName = "StyledTable"

export default StyledTable
