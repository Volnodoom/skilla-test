import styled, { css } from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const iconColor = css`
  color: ${({theme}) => theme.color.textHeader};

  :hover {
    color: ${({theme}) => theme.color.accent};
  }
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 1.375em;

  align-items: center;
`;

const DateChange = styled(ButtonTransparent)`
  ${iconColor};
`;

const DateCalendar = styled(ButtonTransparent)`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${iconColor};
`;

const DateValue = styled.span`
  color: ${({theme}) => theme.color.accent};
  line-height: 1.14;
  font-size: 14px;
`;

export {
  DateWrapper,
  DateChange,
  DateCalendar,
  DateValue,
}
