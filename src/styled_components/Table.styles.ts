import styled from "styled-components"

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  thead tr {
    border-bottom: 1px solid #dbdbdb;
  }

  thead th {
    padding: 0.5em 0;
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
