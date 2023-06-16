import styled from "styled-components";
import customCursor from "assets/icons/icon-cursor.svg"

export const ButtonTransparent = styled.button`
  padding: 0;

  border: 0 solid transparent;
  background-color: transparent;
  line-height: inherit;
  cursor: url(${customCursor}) 8 0, pointer;
`;

