import styled, { keyframes } from "styled-components";
import customCursor from "assets/icons/icon-cursor.svg"

const animateList = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const CustomSelectorList = styled.ul`
  position: absolute;
  display: ${({isActive}) => isActive ? 'block' : 'none'};
  width: 12.75em;
  inset: auto 0 0 auto;
  transform: translateY(100%);
  margin: 0;
  padding: 0;
  z-index: ${({theme}) => theme.position.ultimateTop};

  list-style: none;
  border: 1px solid ${({theme}) => theme.color.thirdBackground};
  background-color: ${({theme}) => theme.color.whitePure};
  box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);

  animation: ${animateList} 0.2s ease-in;
`;

const CustomSelectorItem = styled.li`
  padding: 0.43em 1.43em;

  background-color: ${({theme}) => theme.color.whitePure};
  color: ${({isActive, theme}) => isActive ? theme.color.accent : theme.color.textHeader};

  font-size: 14px;
  line-height: 2.0;
  text-align: start;
  cursor: url(${customCursor}), pointer;

  :hover {
    background-color: ${({theme}) => theme.color.accentLight};
    color: ${({theme}) => theme.color.text};
  }
`;

export {
  CustomSelectorList,
  CustomSelectorItem,
}
