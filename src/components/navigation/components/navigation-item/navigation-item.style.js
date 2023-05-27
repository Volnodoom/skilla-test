import styled, { css } from "styled-components";

const activeIndicator = css`
  position: relative;

  ::before,
  ::after {
    position: absolute;
    content: '';
  }

  ::before {
    width: 3px;
    height: 100%;
    inset: 0 auto auto 0;

    background-color: ${({theme}) => theme.color.accent};
  }

  ::after {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    inset: 50% 0.75em 50% auto;
    transform: translate(-50%, -50%);

    background-color: ${({theme}) => theme.color.yellow};
    box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
  }
`;

const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  width: 15em;
  gap: 0.75em;
  padding: 0.875em 0.75em;

  color: ${({theme}) => theme.color.whitePure};
  opacity: ${({isActive}) => isActive ? 1 : 0.6};
  background-color: ${({isActive}) => isActive ? 'rgba(216, 228, 251, 0.32)' : 'transparent'};
  font-size: 500;

  ${({isActive}) => isActive && activeIndicator};
`;

export {
  NavigationItem,
}
