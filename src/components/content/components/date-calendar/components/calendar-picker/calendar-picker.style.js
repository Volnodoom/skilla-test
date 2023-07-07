import styled, { css } from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const iconColor = css`
  color: ${({theme}) => theme.color.textHeader};

  :hover {
    color: ${({theme}) => theme.color.accent};
  }
`;

const CalendarPickerItem = styled.li`
  padding: 0.375em 1.253em 1.25em;

  :hover {
    background-color: ${({theme}) => theme.color.accentLight};
  }
`;

const CalendarPickerLabel = styled.label`
  font-size: 14px;
  color: ${({theme}) => theme.color.text};
`;

const CalendarInputWrapper = styled.div`
  display: flex;
  margin-top: -0.25em;

  justify-content: space-between;
`;

const CalendarPickerInput = styled.input`
  padding: 0;
  width: 8.4em;
  border: 0 solid transparent;
  background-color: transparent;

  font-size: 14px;
  ::placeholder {
    color: ${({theme}) => theme.color.icon};
  }
`;

const CalendarPickerButton = styled(ButtonTransparent)`
  ${iconColor};
  line-height: 1;
`;

export {
  CalendarPickerItem,
  CalendarPickerLabel,
  CalendarInputWrapper,
  CalendarPickerInput,
  CalendarPickerButton,
}
