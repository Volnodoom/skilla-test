import styled, { css } from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const filterColorButtonActive = css`
  color: ${({theme}) =>  theme.color.text};
`;

const filterColorButtonSelected = css`
  color: ${({theme}) =>  theme.color.accent};
`;

const FilterSimpleButton = styled(ButtonTransparent)`
  position: relative;
  display: flex;

  gap: 0.5rem;
  align-items: baseline;

  font-size: 14px;

  color: ${({theme}) =>  theme.color.textSecondary};

  ${({isSelected}) => isSelected ? filterColorButtonSelected  : ""};
  ${({isActive}) => isActive ? filterColorButtonActive :  ""};
`;

export {
  FilterSimpleButton,
}
