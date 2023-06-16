import styled from "styled-components";

const ContentLoadingLineRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto repeat(3, 1fr);
  padding: 1.375em 2.5em 1em;
  margin-bottom: 1em;
`;

const ContentLoadingLineMessage = styled.td`
  padding: 0.75em 3.75em;
`;

export {
  ContentLoadingLineRow,
  ContentLoadingLineMessage,

}

