import styled from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const DateBalanceWrapper = styled.div`
  display: flex;
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

const DateWrapper = styled.div`
  display: flex;
  gap: 1.375em;

  align-items: center;
`;

const DateChange = styled(ButtonTransparent)`
  color: ${({theme}) => theme.color.textHeader};

  :hover {
    color: ${({theme}) => theme.color.accent};
  }
`;

const DateCalendar = styled(ButtonTransparent)`
  display: flex;
  gap: 0.188em;
  align-items: center;

  color: ${({theme}) => theme.color.textHeader};

  :hover {
    color: ${({theme}) => theme.color.accent};
  }
`;

const DateValue = styled.span`
  color: ${({theme}) => theme.color.accent};
  line-height: 1.14;
  font-size: 14px;
`;

export {
  DateBalanceWrapper,
  BalanceWrapper,
  BalanceTopUp,
  BalanceHighlight,
  DateWrapper,
  DateChange,
  DateCalendar,
  DateValue,

}
