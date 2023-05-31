import styled from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const ContentFooterRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto repeat(3, 1fr);
  padding: 1.375em 2.5em 1em;
  margin-bottom: 1em;

  border-top: 1px solid ${({theme}) =>  theme.color.thirdBackground};

`;

const ContentFooterShowMore = styled(ButtonTransparent)`
  padding: 0.75em 3.75em;

  border: 1px solid ${({theme}) => theme.color.accent};
  border-radius: 0.25em;
  color: ${({theme}) => theme.color.accent};
  font-weight: 500;

  :hover {
    background-color: ${({theme}) => theme.color.accentHover};
    border-color: ${({theme}) => theme.color.accentHover};
    color: ${({theme}) => theme.color.whitePure};
  }

  :active {
    color: ${({theme}) => theme.color.accentActive};
    background-color:transparent;
    border-color: ${({theme}) => theme.color.accentActive};
  }
`;

export {
  ContentFooterRow,
  ContentFooterShowMore,

}
