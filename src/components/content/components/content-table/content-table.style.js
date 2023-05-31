import styled from "styled-components";

const ContentTableWrapper = styled.table`
  margin: 0;
  padding: 0;
  min-width: 100%;

  border-collapse: collapse;
  border: 0px solid transparent;
  border-radius: 0.5em;

  background-color: ${({theme}) =>  theme.color.whitePure};
  box-shadow: 0px 4px 5px #E9EDF3;
`;

export {
  ContentTableWrapper,
}

