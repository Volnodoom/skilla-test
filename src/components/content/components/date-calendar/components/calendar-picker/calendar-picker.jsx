import * as S from "./calendar-picker.style";
import {ReactComponent as IconCalendar} from "assets/icons/icon-calendar.svg";
import "flatpickr/dist/flatpickr.css";
import { useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";
import { DATE_DIGITS, DATE_DIGITS_WITH_DOT, DATE_TIME_FILTER, DAY_MONTH, FixedDateTimeList, YEAR_START } from "utils/constants";
import { fixedDayTimeSwitcher, formatDMYDotToHyphen, formatDMYToDotShort, formatDMYToHyphen, formatDateDotToHyphen, formatDateToDotShort, maskDateInput, todayNoTimeShort, validateInputDate } from "utils/utils";

const CalendarPicker = () => {
  const thePicker = useRef(null);

  const [currentValue, setCurrentValue] = useState('');

  const updateFilter = useCallsInfoStore(selector.updateFilter);
  const fetchFilter = useCallsInfoStore(selector.fetchFilter);
  const setTimeSpan = useCallsInfoStore(selector.setTimeSpan);

  if(thePicker.current) {
    thePicker.current.minDate = new Date();
  }

  const handleCalendarClick = () => {
    thePicker.current.flatpickr.open();
  }

  const handleCalendarInput = (evt) => {
    const value = evt.target.value;
    const validatedValue = validateInputDate(value);
    setCurrentValue(maskDateInput(validatedValue));
  }

  const handleFlatpickerClose = (empty, currentDateString) => {
    let start, end;

    if(currentDateString.length === DATE_DIGITS_WITH_DOT) {
      start = currentDateString;
      end = todayNoTimeShort;
    }

    if(currentDateString.length > DATE_DIGITS_WITH_DOT) {
      start = currentDateString.slice(0, DATE_DIGITS_WITH_DOT);
      end = currentDateString.slice(-DATE_DIGITS_WITH_DOT);
    }

    const dayStart = formatDateDotToHyphen(start);
    const dayEnd = formatDateDotToHyphen(end);
    const startEndTime = {dayStart, dayEnd};
    const displaySelectionValue = `${start}-${end}`;

    setCurrentValue(displaySelectionValue);

    setTimeSpan(startEndTime);
    fetchFilter(DATE_TIME_FILTER, startEndTime);

    updateFilter({
      type: DATE_TIME_FILTER,
      value: displaySelectionValue,
      requestParam: DATE_TIME_FILTER,
      requestParamValue: startEndTime,
    })
  }

  const handleEnterPress = (evt) => {
    const isEnter = evt.key === 'Enter';
    const value = evt.target.value;
    const leftOnlyNumbers = /\D/g;
    const twelveDigitsString = value.replace(leftOnlyNumbers, '').slice(0, DATE_DIGITS*2);
    const stringLength = twelveDigitsString.length;
    const currentNumberValue = currentValue.slice().replace(/\D/g, '');

    if(isEnter) {
      if(stringLength < DATE_DIGITS) {
        setCurrentValue('');

        const startEndTime = fixedDayTimeSwitcher(FixedDateTimeList.ThreeDays);
        setTimeSpan(startEndTime);

        fetchFilter(DATE_TIME_FILTER, startEndTime);
        updateFilter({
          type: DATE_TIME_FILTER,
          value: FixedDateTimeList.ThreeDays,
          requestParam: DATE_TIME_FILTER,
          requestParamValue: startEndTime,
        })
      } else {
        let dayStart, dayEnd, displaySelectionValue;

        if(stringLength === DATE_DIGITS || stringLength < 2*DATE_DIGITS) {
          const dayMonthA = currentNumberValue.slice(0, DAY_MONTH);
          const yearA = currentNumberValue.slice(DAY_MONTH, DATE_DIGITS);
          const valueA =`${dayMonthA}${YEAR_START}${yearA}`;
          const valueADate = Date.parse(valueA.slice(0, 4), valueA.slice(4, 6) - 1, valueA.slice(6,8));
          const valueBDate = Date.parse(new Date());

          // number formate 26.01.23
          const start = valueBDate > valueADate ? currentValue.slice(0, DATE_DIGITS_WITH_DOT) : todayNoTimeShort;
          const end = todayNoTimeShort;

          dayStart = formatDMYDotToHyphen(currentValue.slice(0, DATE_DIGITS_WITH_DOT));
          dayEnd = formatDMYDotToHyphen(todayNoTimeShort);

          displaySelectionValue = `${formatDateToDotShort(start)}-${end}`;
          thePicker.current.flatpickr.setDate(`${formatDateToDotShort(start)} to ${end}`)
        } else {
          const dayMonthA = currentNumberValue.slice(0, DAY_MONTH);
          const yearA = currentNumberValue.slice(DAY_MONTH, DATE_DIGITS);
          const valueA =`${dayMonthA}${YEAR_START}${yearA}`;

          const dayMonthB = currentNumberValue.slice(DATE_DIGITS, DATE_DIGITS + DAY_MONTH);
          const yearB = currentNumberValue.slice(DATE_DIGITS + DAY_MONTH);
          const valueB =`${dayMonthB}${YEAR_START}${yearB}`;

          const valueADate = Date.parse(valueA.slice(0, 4), valueA.slice(4, 6) - 1, valueA.slice(6,8) );
          const valueBDate = Date.parse(valueB.slice(0, 4), valueB.slice(4, 6) - 1, valueB.slice(6,8) );

          const start = valueBDate < valueADate ? valueA : valueB;
          const end = valueBDate < valueADate ? valueB : valueA;
          displaySelectionValue = `${formatDMYToDotShort(start)}-${formatDMYToDotShort(end)}`;
          dayStart = formatDMYToHyphen(start);
          dayEnd = formatDMYToHyphen(end);

          thePicker.current.flatpickr.setDate(`${formatDateToDotShort(start)} to ${end}`)
        }

        const startEndTime = {dayStart, dayEnd};
        setCurrentValue(displaySelectionValue);

        setTimeSpan(startEndTime);
        fetchFilter(DATE_TIME_FILTER, startEndTime);

        updateFilter({
          type: DATE_TIME_FILTER,
          value: displaySelectionValue,
          requestParam: DATE_TIME_FILTER,
          requestParamValue: startEndTime,
        })
      }
    }
  }

  return(
    <S.CalendarPickerItem data-optionname="Указать даты">
      <S.CalendarPickerLabel htmlFor="date-calendar">Указать даты</S.CalendarPickerLabel>

      <S.CalendarInputWrapper>
        <S.CalendarPickerInput
          onChange={handleCalendarInput}
          onKeyDown={handleEnterPress}
          value={currentValue}
          placeholder="__.__.__-__.__.__"
          id="date-calendar"
          type="text"
        />
        <S.CalendarPickerButton
          type="button"
          aria-label="Выбрать даты из календаря"
        >
          <Flatpickr
            ref={thePicker}
            options={{
              maxDate: new Date(),
              dateFormat: "d.m.y",
              mode: "range",
            }}
            onClose={handleFlatpickerClose}
            className="visually-hidden"
          />
          <IconCalendar
            onClick={handleCalendarClick}
            aria-hidden="true"
            focusable="false"
          />
        </S.CalendarPickerButton>
      </S.CalendarInputWrapper>
    </S.CalendarPickerItem>
  );
};

export default CalendarPicker;
