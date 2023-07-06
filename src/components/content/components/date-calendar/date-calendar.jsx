import Tick from "components/tick/tick";
import * as S from "./date-calendar.style";
import { DATE_TIME_FILTER, TickDirection, dateList } from "utils/constants";
import {ReactComponent as IconCalendar} from "assets/icons/icon-calendar.svg";
import { useState } from "react";
import CustomSelector from "components/content/components/custom-selector/custom-selector";
import CalendarPicker from "./components/calendar-picker/calendar-picker";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";

const DateCalendar = () => {
  const [isActive, setIsActive] = useState(false);

  const getFilters = useCallsInfoStore(selector.getFilters);
  const dayTimeFilter = getFilters.find((line) => line.type === DATE_TIME_FILTER);

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
        <S.DateValue>{dayTimeFilter ? dayTimeFilter.value : dateList[0].display}</S.DateValue>
      </S.DateCalendar>

      <S.DateChange type="button" aria-label="Убавить один день">
        <Tick tickDirection={TickDirection.Right}/>
      </S.DateChange>

      <CustomSelector
        filterType={DATE_TIME_FILTER}
        optionList={dateList}
        handleActiveState={{isActive, setIsActive}}
        child={<CalendarPicker />}
      />
    </S.DateWrapper>
  );
};

export default DateCalendar;
