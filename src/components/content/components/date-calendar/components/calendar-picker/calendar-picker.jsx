import * as S from "./calendar-picker.style";
import {ReactComponent as IconCalendar} from "assets/icons/icon-calendar.svg";

const CalendarPicker = () => {
  return(
    <S.CalendarPickerItem data-optionname="Указать даты">
      <S.CalendarPickerLabel htmlFor="date-calendar">Указать даты</S.CalendarPickerLabel>

      <S.CalendarInputWrapper>
        <S.CalendarPickerInput
          placeholder="__.__.__-__.__.__"
          id="date-calendar"
          type="text"
        />
        <S.CalendarPickerButton
          type="button"
          aria-label="Выбрать даты из календаря"
        >
          <IconCalendar aria-hidden="true" focusable="false"/>
        </S.CalendarPickerButton>
      </S.CalendarInputWrapper>
    </S.CalendarPickerItem>
  );
};

export default CalendarPicker;
