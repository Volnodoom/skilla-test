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
  margin-right: 0.45rem;
  height: 2.46rem;

  gap: 0.5rem;
  align-items: center;


  font-size: 14px;

  color: ${({theme}) =>  theme.color.textSecondary};

  ${({isSelected}) => isSelected ? filterColorButtonSelected  : ""};
  ${({isActive}) => isActive ? filterColorButtonSelected :  ""};
`;

export {
  FilterSimpleButton,
}
