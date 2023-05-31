import Tick from "components/tick/tick";
import * as S from "./date-calendar.style";
import { TickDirection } from "utils/constants";
import {ReactComponent as IconCalendar} from "assets/icons/icon-calendar.svg";
import { useState } from "react";
import CustomSelector from "components/content/components/custom-selector/custom-selector";
import CalendarPicker from "./components/calendar-picker/calendar-picker";

const DateCalendar = () => {
  const [isActive, setIsActive] = useState(false);

  const dateList = [
    {
      text: '3 дня',
      timeValue: '',
      flag: true,
    },
    {
      text: 'Неделя',
      timeValue: '',
      flag: false,
    },
    {
      text: 'Месяц',
      timeValue: '',
      flag: false,
    },
    {
      text: 'Год',
      timeValue: '',
      flag: false,
    },
  ]

  const handleDateSelectionClick = () => setIsActive(prev => !prev);

  return(
    <S.DateWrapper>
      <S.DateChange type="button" aria-label="Прибавить один день">
        <Tick tickDirection={TickDirection.Left}/>
      </S.DateChange>

      <S.DateCalendar type="button"
        onClick={handleDateSelectionClick}
      >
        <IconCalendar aria-hidden="true" focusable="false"/>
        <span className="visually-hidden">Звонки за</span>
        <S.DateValue>3 дня</S.DateValue>
      </S.DateCalendar>

      <S.DateChange type="button" aria-label="Убавить один день">
        <Tick tickDirection={TickDirection.Right}/>
      </S.DateChange>

      <CustomSelector
        optionList={dateList}
        isActive={isActive}
        child={<CalendarPicker />}
      />
    </S.DateWrapper>
  );
};

export default DateCalendar;
