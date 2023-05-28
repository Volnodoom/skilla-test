import Tick from "components/tick/tick";
import * as S from "./date-balance.style";
import {ReactComponent as IconCalendar} from "assets/icons/icon-calendar.svg";
import { TickDirection } from "utils/constants";

const DateBalance = () => {
  return(
  <S.DateBalanceWrapper>
    <S.BalanceWrapper>
      Баланс:&nbsp;<S.BalanceHighlight>272 ₽</S.BalanceHighlight>
      <S.BalanceTopUp type="button" aria-label="Пополнить баланс"/>
    </S.BalanceWrapper>

    <S.DateWrapper>
      <S.DateChange type="button" aria-label="Прибавить один день">
        <Tick tickDirection={TickDirection.Left}/>
      </S.DateChange>

      <S.DateCalendar type="button">
        <IconCalendar aria-hidden="true" focusable="false"/>
        <span className="visually-hidden">Звонки за</span>
        <S.DateValue>3 дня</S.DateValue>
      </S.DateCalendar>

      <S.DateChange type="button" aria-label="Убавить один день">
        <Tick tickDirection={TickDirection.Right}/>
      </S.DateChange>
    </S.DateWrapper>
  </S.DateBalanceWrapper>
  );
};

export default DateBalance;
