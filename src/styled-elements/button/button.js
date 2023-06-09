import styled from "styled-components";
import customCursor from "assets/icons/icon-cursor.svg"

export const Button = styled.button`
  padding: 0.875em 1.25em;

  background-color: ${({theme}) => theme.color.accent};
  border-radius: 0.25em;
  border: 0 solid transparent;

  font-size: 1rem;
  font-weight: 500;
  line-height: inherit;
  color: ${({theme}) => theme.color.whitePure};
  cursor: url(${customCursor}), pointer;

  :hover {
    background-color: ${({theme}) => theme.color.accentHover};
  }

  :active {
    background-color: ${({theme}) => theme.color.accentActive};
  }
`;
