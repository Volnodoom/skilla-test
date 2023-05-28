import { InitialHeadlineData } from "utils/constants";
import * as S from "./header-line.style";
import HeadLineInfoItem from "./components/head-line-info-item/head-line-info-item";
import FakeAvatar from "assets/img/fake-avatar.png";
import Tick from "components/tick/tick";

const HeaderLine = () => {
  return(
    <S.HeadLineWrapper>
      <S.HeadLineList>
        <S.HeadLineDateItem>
          <span className="visually-hidden">Дата</span>
          Среда, 13 окт
        </S.HeadLineDateItem>

        {
          InitialHeadlineData.map((value, index) => (
            <HeadLineInfoItem
              text={value.text}
              textHighligh={value.textHighligh}
              color={value.color}
              key={index}
            />
          ))
        }
      </S.HeadLineList>

      <S.HeadLineSearchButton type="button">
        <S.HeadLineSearchIcon aria-hidden="true" focusable="false"/>
        <span className="visually-hidden">Поиск</span>
      </S.HeadLineSearchButton>

      <S.HeadLinerUserName type="button">
        ИП Сидорова Александра Михайловна
        <Tick />
      </S.HeadLinerUserName>

      <S.HeadLineActiveUser type="button">
        <span className="visually-hidden">Сменить пользователя</span>
        <S.HeaderLineAvatar src={FakeAvatar} alt="Упоров Кирилл" />
        <Tick />
      </S.HeadLineActiveUser>
    </S.HeadLineWrapper>
  );
};

export default HeaderLine;
