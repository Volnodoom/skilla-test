import styled from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const DateBalanceWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1.25em;

  align-items: center;
`;

const BalanceWrapper = styled.span`
  display: flex;
  padding: 0.5rem 0.75rem;
  margin-right: 3rem;

  align-items: center;
  border-radius: 3rem;

  font-size: 14px;
  background-color: ${({theme}) => theme.color.whitePure};
  color: ${({theme}) => theme.color.textHeader};
`;

const BalanceHighlight = styled.b`
  color: ${({theme}) => theme.color.text};
  font-weight: 500;
`;

const BalanceTopUp = styled(ButtonTransparent)`
  position: relative;
  margin-left: 0.625em;
  width: 1.5em;
  height: 1.5em;

  font-size: 1rem;
  border-radius: 50%;
  background-color: ${({theme}) => theme.color.accent};

  :hover {
    background-color: ${({theme}) => theme.color.accentHover};
  }

  ::after,
  ::before {
    position: absolute;
    inset: 50%;
    content: '';

    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.color.whitePure};
  }

  ::before {
    width: 0.75em;
    height: 0.125em;
  }

  ::after {
    height: 0.75em;
    width: 0.125em;
  }
`;

export {
  DateBalanceWrapper,
  BalanceWrapper,
  BalanceTopUp,
  BalanceHighlight,
}
