import * as S from "./date-balance.style";
import DateCalendar from "../date-calendar/date-calendar";

const DateBalance = () => {
  return(
  <S.DateBalanceWrapper>
    <S.BalanceWrapper>
      Баланс:&nbsp;<S.BalanceHighlight>272 ₽</S.BalanceHighlight>
      <S.BalanceTopUp type="button" aria-label="Пополнить баланс"/>
    </S.BalanceWrapper>

    <DateCalendar />
  </S.DateBalanceWrapper>
  );
};

export default DateBalance;
