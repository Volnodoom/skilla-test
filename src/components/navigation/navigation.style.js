import styled from "styled-components";
import { Button } from "styled-elements/button/button";

const NavigationWrapper = styled.div`
  grid-area: navigation;

  background-color: ${({theme}) => theme.color.secondBackground};
`;

const NavigationLogo = styled.img`
  width: 6.87rem;
  height: 1.75rem;
  margin: 1.25em 0.75em 2em;
`;

const NavigationList = styled.ul`
  margin: 0 0 4em;
  padding: 0;
  list-style: none;
`;

const NavigationAddButton = styled(Button)`
  display: flex;
  gap: 1em;
  width: 12.5rem;
  margin: 0 auto 2em;

  justify-content: flex-end;
  align-items: center;
`;

const NavigationPaymentButton = styled(NavigationAddButton)`
  gap: 2em;
`;

export {
  NavigationWrapper,
  NavigationLogo,
  NavigationList,
  NavigationAddButton,
  NavigationPaymentButton,

}
